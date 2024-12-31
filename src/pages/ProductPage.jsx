import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Checkbox, Stack, Select } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { mens, womens, kids } from '../db';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]); // To hold the fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // To hold the filtered products
  const [sortOption, setSortOption] = useState('priceLowToHigh'); // Sorting option
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({ gender: [], category: [], price: [] });

  // Fetching products from db based on category
  useEffect(() => {
    let data = [];
    if (category === 'mens') data = mens;
    if (category === 'womens') data = womens;
    if (category === 'kids') data = kids;
    setProducts(data);
    setFilteredProducts(data);
  }, [category]);

  // Apply Filters
  useEffect(() => {
    let filtered = products;

    // Filter by Gender
    if (filters.gender.length > 0) {
      filtered = filtered.filter((product) => filters.gender.includes(product.gender));
    }

    // Filter by Category
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) => filters.category.includes(product.category));
    }

    // Filter by Price
    if (filters.price.length > 0) {
      filtered = filtered.filter((product) => {
        return filters.price.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === 'priceLowToHigh') return Number(a.price) - Number(b.price);
      if (sortOption === 'priceHighToLow') return Number(b.price) - Number(a.price);
      if (sortOption === 'popularity') return Number(b.rating) - Number(a.rating);
      return 0;
    });
  }, [filteredProducts, sortOption]);
  
  // Toggle Drawer
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Handle Filter Changes
  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const currentValues = prev[type];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [type]: newValues };
    });
  };

  return (
    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
      {/* Sidebar for filters */}
      <Box w={{ base: 'full', md: '25%' }} p={4} display={{ base: 'none', md: 'block' }}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Gender
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={2}>
                <Checkbox onChange={() => handleFilterChange('gender', 'Mens')}>Mens</Checkbox>
                <Checkbox onChange={() => handleFilterChange('gender', 'womens')}>womens</Checkbox>
                <Checkbox onChange={() => handleFilterChange('gender', 'Kids')}>Kids</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
      
            <AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex="1" textAlign="left">
        Category
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    <Stack spacing={2}>
      {category === 'mens' && (
        <>
          <Checkbox onChange={() => handleFilterChange('category', 'T-Shirt')}>T-Shirt</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Shirt')}>Shirt</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Pants')}>Pants</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Jeans')}>Jeans</Checkbox>
        </>
      )}
      {category === 'womens' && (
        <>
          <Checkbox onChange={() => handleFilterChange('category', 'Leggings')}>Leggings</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Jackets')}>Jackets</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Kurtas')}>Kurtas</Checkbox>
        </>
      )}
      {category === 'kids' && (
        <>
          <Checkbox onChange={() => handleFilterChange('category', 'Onesies')}>Onesies</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Shorts')}>Shorts</Checkbox>
          <Checkbox onChange={() => handleFilterChange('category', 'Dress')}>Dress</Checkbox>
        </>
      )}
    </Stack>
  </AccordionPanel>
</AccordionItem>

          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={2}>
                <Checkbox onChange={() => handleFilterChange('price', '0-500')}>Below Rs.500</Checkbox>
                <Checkbox onChange={() => handleFilterChange('price', '500-1000')}>Rs.500-1000</Checkbox>
                <Checkbox onChange={() => handleFilterChange('price', '1000-1500')}>Rs.1001-1500</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Mobile Drawer for filters */}
      <Button onClick={toggleDrawer} display={{ base: 'block', md: 'none' }} m={4}>
        Filters
      </Button>
      

            {/* Product List and Sorting */}
            <Box w={{ base: 'full', md: '75%' }} p={4}>
        <Select
          mb={4}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </Select>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={4}
        >
          {sortedProducts.map((data, index) => (
            <ProductCard key={index} data={data} category={category} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;


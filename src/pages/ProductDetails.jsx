import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { MdLocalShipping } from "react-icons/md";
import { mens, womens, kids } from "../db";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { CartContext } from "./CartContext"; // Import CartContext
import { useNavigate } from 'react-router-dom';


export default function ProductDetail() {
  const { category, id } = useParams();
  const [detail, setDetail] = useState({});
  const { addToCart } = useContext(CartContext); // Get addToCart from context
  const navigate = useNavigate(); // Initialize the navigate hook


  useEffect(() => {
    let productDetail;
    if (category == "mens") {
      productDetail = mens.find((item) => item.id == id);
    } else if (category == "womens") {
      productDetail = womens.find((item) => item.id == id);
    } else if (category == "kids") {
      productDetail = kids.find((item) => item.id == id);
    }

    if (productDetail) {
      setDetail(productDetail);
    }
  }, [category, id]);

  const handleAddToCart = () => {
    addToCart(detail); 
    navigate('/cart');// Add the product to the cart
  };

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={detail.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "100%" }}
          />
        </Flex>
        <Stack spacing={{ base: 4, md: 10 }} textAlign={"center"}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} color={useColorModeValue("yellow.500", "yellow.300")} fontSize={{ base: "1xl", sm: "4xl", lg: "18px" }}>
              {detail.brand}
            </Heading>
            <Text>{detail.productName}</Text>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={400} fontSize={"2xl"}>
              {detail.price}
            </Text>
            <Text fontSize={"1xl"}>{detail.price} (74% OFF)</Text>
            <Text fontSize={"xs"}>Price inclusive of all taxes</Text>
          </Box>

          <Stack spacing={{ base: 2, sm: 6 }} direction={"column"} alignItems={"center"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
                Product Details
              </Text>

              <List spacing={1}>
                <ListItem>
                  <Text>Regular Fit</Text>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>Package contains:</Text> 1
                </ListItem>
                <ListItem>
                  <Text>Hand wash</Text>
                </ListItem>
                <ListItem>
                  <Text>100% poly cotton</Text>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>Product Code:</Text> 467278476002
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>MRP :</Text> Rs. 1,999.00 inclusive of all taxes
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>Net Qty :</Text> 1
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>Country Of Origin:</Text> INDIA
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={2}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("yellow.700", "yellow.700")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{ transform: "translateY(2px)", boxShadow: "lg" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

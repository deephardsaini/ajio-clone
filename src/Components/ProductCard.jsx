import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }

          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function ProductCard({ data,category }) {
  const navigate = useNavigate()
  return (
    <Flex  alignItems="center" justifyContent="center">
      <Link to={`/product/${category}/${data.id}`}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        w={'300px'}
        h={'530px'}
        textAlign={'center'}
        position="relative">
        {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={data.image} alt={`Picture of ${data.name}`} roundedTop="lg"/>

        <Box p="1">
          {data.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}

          <Flex mt="1"  alignContent="center" justifyContent="center">
            <Box
              fontSize="1sm"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color={'Brown'}
              isTruncated>
              {data.brand}
            </Box>
          </Flex>

          <Box
            fontSize={'14px'}>
            {data.productName}
          </Box>

          <Flex justifyContent="center" alignContent="center">
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
            ₹
              {data.price}
            </Box>
          </Flex>

          <Box
            fontSize={'1rem'}
            color={'green'}
            textAlign={'center'}>
              price 
              ₹
            {data.originalPrice}
          </Box>
        </Box>
      </Box>
      </Link>
    </Flex >
  )
}

export default ProductCard

"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { mens, womens, kids } from "../db";
import { useParams } from "react-router-dom";

export default function Simple() {
  const { category, id } = useParams();
  console.log(category);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    if (category == "mens") {
      const detail = mens.filter((item) => {
        return item.id == id;
      });
      setDetail(detail[0])
      console.log(detail,'cloth')
    }

    if (category == "womens") {
      const detail = womens.filter((item) => {
        return item.id == id;
      });
      setDetail(detail[0])
    }

    if (category == "kids") {
      const detail = kids.filter((item) => {
        return item.id == id;
      });
      setDetail(detail[0])
    }
  }, []);

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
            detail.image
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "100%" }}
          />
        </Flex>
        <Stack spacing={{ base: 4, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontSize={{ base: "1xl", sm: "4xl", lg: "18px" }}
            >
              BOMBAY BEGUM
            </Heading>
            <Text>Men Regular Fit Shirt with Cutaway Collar</Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={400}
              fontSize={"2xl"}
            >
              ₹520
            </Text>
            <Text fontSize={"1xl"}>MRP₹1,999 (74% OFF)</Text>
            <Text fontSize={"xs"}>Price inclusive of all taxes</Text>
          </Box>

          <Stack
            spacing={{ base: 2, sm: 6 }}
            direction={"column"}
            alignItems={"center"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            {/* <VStack spacing={{ base: 2, sm: 3 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'1xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text>

            </VStack> */}
            {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                // textAlign={'left'}
                // paddingLeft={'100px'}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={1}>
                <ListItem>
                  <Text>Regular Fit</Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Package contains:
                  </Text>{" "}
                  1 shirt
                </ListItem>
                <ListItem>
                  <Text>Hand wash</Text>{" "}
                </ListItem>
                <ListItem>
                  <Text>100% polly cotton</Text>
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Product Code:
                  </Text>{" "}
                  467278476002
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    MRP :
                  </Text>{" "}
                  Rs. 1,999.00 inclusive of all taxes
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Net Qty :
                  </Text>{" "}
                  1
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country Of Origin:
                  </Text>{" "}
                  INDIA
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Commodity:
                  </Text>{" "}
                  Men's Shirts
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
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
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

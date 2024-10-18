"use client";
import React, { useContext } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Plus, Minus } from "lucide-react";
import { CartContext } from "./CartContext";

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <Flex
      justifyContent={"center"}
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      {/* Table */}
      <Box p="4" mt={"60px"} w={"60%"}>
        <div>
          <Text as="h2" fontWeight="bold">
            Shopping Bag
          </Text>
          <Text as="h6">
            <b>{cart.length} item</b> added to your bag
          </Text>
          <TableContainer>
            <Table background={"#fff"} borderRadius={"8px"} mt={"20px"}>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Subtotal</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart?.map((item) => {
                  return (
                    <Tr>
                      <Td>
                        <Box display="flex" alignItems="center">
                          <Image
                            src={item?.image}
                            alt="Image"
                            boxSize="140px"
                            objectFit="cover"
                            borderRadius={"8px"}
                          />
                          <Box ml={3}>
                            <Text fontWeight="bold">{item?.brand}</Text>
                            <Text>{item?.productName}</Text>
                          </Box>
                        </Box>
                      </Td>
                      <Td textAlign={"left"}>{item?.offerPrice}(74% OFF)</Td>
                      <Td>
                        <Box display="flex" alignItems="center">
                          <Button
                            size="sm"
                            width="30px"
                            height="30px"
                            borderWidth="1px"
                            borderColor="black"
                            p={0}
                            fontSize="lg"
                            aria-label="Decrease"
                          >
                            <Minus />
                          </Button>
                          <Text mx={2} fontSize="lg">
                            2
                          </Text>
                          <Button
                            size="sm"
                            width="30px"
                            height="30px"
                            borderWidth="1px"
                            borderColor="black"
                            p={0}
                            fontSize="lg"
                            aria-label="Increase"
                          >
                            <Plus />
                          </Button>
                        </Box>
                      </Td>
                      <Td textAlign={"left"}>720</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </Box>
      {/* Sidebar */}
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />

      {/* Mobile Navigation */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Flex>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderLeft="1px"
      borderLeftColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "100%", md: "25%" }}
      h="100vh"
      mt="60px"
      p="4"
      {...rest}
    >
      <Box
        h="auto"
        alignItems="center"
        mx="4"
        mb="4"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" pt={"4"}>
          Calculated Shipping
        </Text>
        <Flex>
          <input
            type="text"
            placeholder="2 items"
            style={{
              padding: "8px",
              border: "1px solid gray",
              borderRadius: "4px",
              flex: "1",
              marginRight: "8px",
              marginTop: "20px",
              fontSize: "sm",
            }}
          />
          <Button colorScheme="teal" marginTop={"20px"}>
            Update
          </Button>
        </Flex>
      </Box>

      <hr />

      <Box mx="4" my="4">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          Coupon Code
        </Text>
        <Text mb="4" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
        <Flex>
          <input
            type="text"
            placeholder="Enter coupon code"
            style={{
              padding: "8px",
              border: "1px solid gray",
              borderRadius: "4px",
              flex: "1",
              marginRight: "8px",
              fontSize: "sm",
            }}
          />
          <Button colorScheme="teal">Apply</Button>
        </Flex>
      </Box>

      <Box mx="4" my="4">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          Cart Total
        </Text>
        <Text>Total MRP: 1249</Text>
        <Text>Coupon Discount: Apply Coupon</Text>
        <Text>Shipping Fee: Free</Text>
      </Box>

      <hr />

      <Text fontSize="lg" fontWeight="bold" mb="4" mt="3">
        Total Amount: 1269
      </Text>

      {/* Modal */}
      <BasicUsage />
    </Box>
  );
};

const BasicUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <>
      <Button onClick={onOpen} w={"100%"}>
        Place Order
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Your order has been placed successfully!</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                onClose();
                toast({
                  title: "Order Placed",
                  description: "Your order has been successfully placed.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "top", // Adjusted to top
                  marginTop: "200px", // Offset to center vertically
                  display: "flex",
                  justifyContent: "center",
                });
              }}
            >
              Buy Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};

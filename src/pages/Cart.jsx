"use client";
import React, { useContext } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Text,
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Plus, Minus } from "lucide-react";
import { CartContext } from "./CartContext";

export default function SimpleSidebar() {
  const { cart, removeFromCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const calculateSubtotal = (price, quantity) => price * quantity;
  const totalMRP = cart.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.offerPrice * item.quantity,
    0
  );

  return (
    <Flex justifyContent="center" minH="100vh" w="100%" bg="gray.100">
      {/* Table */}
      <Box p="4" mt="60px" w="60%" marginLeft="40px">
        <Text as="h2" fontWeight="bold">
          Shopping Bag
        </Text>
        <Text as="h6">
          <b>{cart.length} item(s)</b> added to your bag
        </Text>
        <TableContainer>
          <Table background="white" borderRadius="8px" mt="20px">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Box display="flex" alignItems="center">
                      <Image
                        src={item.image}
                        alt="Image"
                        boxSize="140px"
                        objectFit="cover"
                        borderRadius="8px"
                        width="100%"
                      />
                      <Box ml={3}>
                        <Text fontWeight="bold">{item.brand}</Text>
                        <Text>{item.productName}</Text>
                      </Box>
                    </Box>
                  </Td>

                  <Td>{item.price}</Td>
                  <Td>
                    <Box display="flex" alignItems="center">
                      <Button
                        size="sm"
                        width="30px"
                        height="30px"
                        borderWidth="1px"
                        borderColor="black"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus />
                      </Button>

                      <Text mx={2} fontSize="lg">
                        {item.quantity}
                      </Text>

                      <Button
                        size="sm"
                        width="30px"
                        height="30px"
                        borderWidth="1px"
                        borderColor="black"
                      >
                        <Plus />
                      </Button>
                    </Box>
                  </Td>
                  <Td>{item.price}</Td>
                  <Td>{calculateSubtotal(item.price, item.quantity)}</Td>
                  <Td>
                    <CloseButton onClick={() => removeFromCart(item.id)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Sidebar */}
      <SidebarContent totalMRP={totalMRP} totalAmount={totalAmount} />
    </Flex>
  );
}

const SidebarContent = ({ totalMRP, totalAmount }) => {
  return (
    <Box
      bg="white"
      borderLeft="1px"
      borderLeftColor="gray.200"
      w="25%"
      h="100vh"
      mt="60px"
      p="4"
    >
      <Box mx="4" my="4">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          Cart Total
        </Text>
        <Text>Total MRP: {totalMRP}</Text>
        <Text>Coupon Discount: Apply Coupon</Text>
        <Text>Shipping Fee: Free</Text>
        <Text fontSize="lg" fontWeight="bold" mt="4">
          Total Amount: {totalAmount}
        </Text>
      </Box>
      <BasicUsage />
    </Box>
  );
};

const BasicUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clearCart } = useContext(CartContext);
  const toast = useToast();

  return (
    <>
      <Button onClick={onOpen} w="100%">
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
                clearCart();
                toast({
                  title: "Order Placed",
                  description: "Your order has been successfully placed.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
                onClose();
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

"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { mens } from "../db";
import { womens } from "../db";
import { kids } from "../db";
import { useParams } from "react-router-dom";

const AccordionExample = () => (
  <Accordion allowMultiple>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gender
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>Men (361,096)</Checkbox>
          </AccordionPanel>
          <AccordionPanel textAlign="left">
            <Checkbox>Women (216)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Boys (9)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>Tshirts (101,569)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Shirts (89,314)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Jeans (22,155)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Sweatshirt & Hoodies (19,909)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Trousers & Pants (19,210)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>Below Rs.500 (5,995)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Rs.500-1000 (50,831)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Rs.1001-1500 (35,369)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Rs.1501-2000 (19,056)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Rs.2001-2500 (7,901)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brands
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>18 EDITION (15)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>3pin (47)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>4400BC (67)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>5TH ANFOLD (1)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>69TH AVENUE (50)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Occasion
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>Casual (142)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Universal (17)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Work (11)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>Evening (10)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Discount
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>0-20% (15)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>21-30% (67)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>41-50% (4)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>51-80% (94)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Size & Fit
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Checkbox>S (136)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>M (144)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>L (140)</Checkbox>
          </AccordionPanel>

          <AccordionPanel textAlign="left">
            <Checkbox>XL (133)</Checkbox>
          </AccordionPanel>
          <AccordionPanel textAlign="left">
            <Checkbox>XXL (92)</Checkbox>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
);

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <AccordionExample />
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={"center"}
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack justifyContent={"center"} marginTop={"60px"}>
        <div>ProductPage</div>
      </HStack>
    </Flex>
  );
};

const ProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { category } = useParams();
  console.log(category);
  return (
    <Box
      minH="100vh"
      maxW={"7xl"}
      margin={"auto"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        marginLeft={"60"}
        style={{
          display: "grid",
          gap: "12px",
          justifyContent: "space-around",
          padding: "5px",
          borderTop: "none",
        }}
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr) ",
          lg: "repeat(3, 1fr) ",
        }}
      >
        {/* Content */}
        {category == "mens" &&
          mens.map((data, index) => <ProductCard key={index} data={data} category={'mens'} />)}

        {category == "womens" &&
          womens.map((data, index) => <ProductCard key={index} data={data} category={'womens'}/>)}

        {category == "kids" &&
          kids.map((data, index) => <ProductCard key={index} data={data} category={'kids'}/>)}
      </Box>
    </Box>
  );
};

export default ProductPage;

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
    VStack,
    textDecoration,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../assets/logo.png'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 40 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                position={'fixed'}
                zIndex={1}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Box
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        <img src={logo} alt="" />
                    </Box>

                    {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
              
            </Flex> */}
                </Flex>
                <Stack
                    flex={{ base: 5, md: 5 }}
                    justify={'flex-end'}
                    direction={'row'}
                    marginRight={'10px'}
                >
                    <DesktopNav />
                </Stack>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');


    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                        {console.log(navItem)}

                        {navItem.col1 && (
                            <PopoverContent
                                border={'1px solid blue'}
                                //   border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={2}
                                rounded={'xl'}
                                w={'fit-content'}

                            >
                                <HStack spacing={6}
                                    webkit-align-items={'start'}
                                    alignItems={'start'}
                                >
                                    <Stack>

                                        {navItem.col1.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}

                                    </Stack>

                                    <Stack textAlign={'left'}>
                                        {navItem?.col2?.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}


                                    </Stack>

                                    <Stack textAlign={'left'}>
                                        {navItem?.col3?.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}

                                    </Stack>

                                    <Stack textAlign={'left'}>
                                        {navItem?.col4?.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}

                                    </Stack>
                                </HStack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            py={2}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
            }}
        >
            <Stack direction={'row'} align={'start'} >
                <Box>
                    <Text
                        align={'start'}
                        transition={'all .3s ease'}
                        fontSize={14}
                        fontWeight={'bold'}
                        _hover={{
                            textDecoration: 'underline',
                        }}>
                        {label}
                    </Text>
                    {subLabel && subLabel.length > 0 && <Text fontSize={'sm'} align={'start'}>{subLabel?.map((item) => <Text textAlign={'start'} _hover={{
                        textDecoration: 'underline',
                    }}>{item}</Text>)}</Text>}
                </Box>
                {/* <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex> */}
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'MEN',
        href: 'mens',
        col1: [
            {
                label: 'CLOTHING',
                href: 'mens',
            },

            {
                label: 'FOOTWEAR',
                href: 'mens',
            },

            {
                label: 'ACCESORIES',
                href: 'mens',
            },

            {
                label: 'MENS WEAR',

                href: 'mens',
            },
            {
                label: 'WOMENS WEAR',

                href: 'mens',
            },

            {
                label: 'NIGHT & LAUNGWEAR',
                href: 'mens',
            },

            {
                label: 'WINTER WEAR',
                href: 'mens',
            },

            {
                label: 'GROOMING',
                href: 'mens',
            },

            {
                label: 'ETHNIC & FESTIVE',
                href: 'mens',
            },
        ],

        col2: [
            {
                label: 'CLOTHING',
                subLabel: ['Jackets', 'Jeans', 'Shirt', 'Trousers',
                    'Jackets', 'Jeans', 'Shirt', 'Trousers',
                ],
                href: 'mens',
            },

            {
                label: 'FOOTWEAR',
                subLabel: ['Casual Shoes', 'Flip-Flop & Slippers', 'Formal Shoes', 'Sandals',
                    'Sneakers', 'Sports Shoes', 'Shirt', 'Trousers',
                ],
                href: 'mens',
            },
        ],

        col3: [
            {
                label: 'ACCESSORIES',
                subLabel: ['BagPacks', 'Wallets', 'Belt', 'Caps & Shorts',
                    'Fashion Accessories', 'Socks', 'Sunglasses', 'Watches',
                ],
                href: 'mens',
            },

            {
                label: 'PRECIOUS JWELLERY',
                subLabel: ['Gold & Silver Coins', 'Gold & Diamond Jwellery', 'Silver Jwellery'
                ],
                href: 'mens',
            },

            {
                label: 'INNER WEAR',
                subLabel: ['Breifs', 'Trunks & Boxers', 'Vests'
                ],
                href: 'mens',
            },
        ],

        col4: [
            {
                label: 'FEATURED',
                subLabel: ['Bags under 1499', 'Footwear under 1499', 'Jeans under 1299', <strong>#Ajio Recommends</strong>,
                    'Play Time'
                ],
                href: 'mens',
            },

        ],
    },
    {
        label: 'WOMEN',
        href: 'womens',
        col1: [
            {
                label: 'CLOTHING',
                href: 'womens',
            },

            {
                label: 'FOOTWEAR',

                href: 'womens',
            },

            {
                label: 'ACCESORIES',

                href: 'womens',
            },

            {
                label: 'MENS WEAR',

                href: 'womens',
            },
            {
                label: 'WOMENS WEAR',

                href: 'womens',
            },

            {
                label: 'NIGHT & LAUNGWEAR',
                href: 'womens',
            },

            {
                label: 'WINTER WEAR',
                href: 'womens',
            },

            {
                label: 'GROOMING',
                href: 'womens',
            },

            {
                label: 'ETHNIC & FESTIVE',
                href: 'womens',
            },
        ],


        col2: [
            {
                label: 'ETHNIC WEAR',
                subLabel: ['Kurtas', 'Dress Material', 'Salwar & Churidars', 'Sarees',
                    'Dupttas', 'Kurti Suit Sets', 'Blouses', 'Skirt & Ghagras', 'Shawls & Wraps', 'Palazzos & Culottes'
                ],
                href: 'womens',
            },

            {
                label: 'JWELLERY',
                subLabel: [
                    'Gold And Silver Coins', 'Gold And Diamond Jewellery', 'Silver Jewellery', 'Fashion Jewellery',
                ],
                href: 'womens',
            },
        ],

        col3: [
            {
                label: 'ACCESSORIES',
                subLabel: ['Sunglasses & Frames', 'Wallets', 'Belt', 'Caps & Shorts',
                    'Fashion Accessories', 'Socks', 'Sunglasses', 'Luggage & Trolleys',
                ],
                href: 'womens',
            },

            {
                label: 'LINGERIE & INNERWEAR',
                subLabel: ['Bras', 'Panties', 'Camisoles & Slips', 'Maternity Wear', 'Thermal Wear'
                ],
                href: 'womens',
            },

            {
                label: 'FEATURED',
                subLabel: ['Dresses Under 999', 'Footwear Under 799'
                ],
                href: 'womens',
            },
        ],

        col4: [
            {
                label: 'FOOTWEAR',
                subLabel: ['Casual Shoes', 'Flat Sandals', 'Sports Shoes', 'Flip Flop & SlippersHeeled', 'SandalsHeeled', 'Shoes', 'Boots', 'Woodland'
                ],
                href: 'womens',
            },

            {
                label: 'WESTERN WEAR',
                subLabel: ['Tops', 'T-Shirts', 'Jeans & Jeggings', 'Dresses', 'Trousers & Pants', 'Shirts', 'Track Pants', 'Skirts & Shorts', 'Jackets & Coats', 'Jumpsuits & Playsuits', 'Shrugs & Boleros', 'Sweatshirts & Hoodies', 'Sweaters & Cardigans'
                ],
                href: 'womens',
            },

        ],
    },
    {
        label: 'KIDS',
        href: 'kids',
        col1: [
            {
                label: 'CLOTHING',
                href: 'kids',
            },

            {
                label: 'FOOTWEAR',
                href: 'kids',
            },

            {
                label: 'ACCESORIES',

                href: 'kids',
            },

            {
                label: 'MENS WEAR',

                href: 'kids',
            },
            {
                label: 'WOMENS WEAR',

                href: 'kids',
            },

            {
                label: 'NIGHT & LAUNGWEAR',
                href: 'kids',
            },

            {
                label: 'WINTER WEAR',
                href: 'kids',
            },

            {
                label: 'GROOMING',
                href: 'kids',
            },

            {
                label: 'ETHNIC & FESTIVE',
                href: 'kids',
            },
        ],

        col2: [
            {
                label: 'BOYS',
                subLabel: ['Denims & Trousers', 'Joggers & Track', 'Pants', 'Outerwear', 'Shirts', 'Shorts & 3/4thsT-Shirts',
                ],
                href: 'kids',
            },

            {
                label: 'GIRLS',
                subLabel: ['Dresses & Frocks', 'Jeans & Jeggings', 'Leggings', 'Outerwear', 'Skirts & Shorts', 'Tops & T-Shirts'
                ],
                href: 'kids',
            },
        ],

        col3: [
            {
                label: 'SHOP BY AGE',
                subLabel: ['0 To 2 Years', '2 To 5 Years', '5 To 8 Years', '8 To 12 Years', '12 Years And Above'
                ],
                href: 'kids',
            },

            {
                label: 'FEATURED',
                subLabel: ['Dresses Under 499', 'Tops Under 399'
                ],
                href: 'kids',
            },

            {
                label: 'BABY',
                subLabel: ['Sets'
                ],
                href: 'kids',
            },

            {
                label: 'TOYS AND BABYCARE',
                subLabel: ['Action-Figurine & Collectibles', 'Creative & Educational Toys', 'Gaming', 'Robots & Vehicles', 'Infants Toys', 'Role & Pretend PlaySchool', 'Party Supplies & BooksSoft', 'ToysToy-Guns & Accessories'
                ],
                href: 'kids',
            },
        ],

        col4: [
            {
                label: 'FEATURED BRANDS',
                subLabel: ['Crocs', 'MINI KLUB', 'Gini & Jony', 'Hamleys', 'Mothercare', 'Marks & Spencer', 'Pepe Jeans', 'Peppermint', 'UCB Kids', 'U.S.P.A', 'KidsMILA', 'BABYMUJILee', 'Cooper'
                ],
                href: 'kids',
            },

        ],
    },
    {
        label: 'HOME & KITCHEN',
        col1: [
            {
                label: 'BED LINEN',
                subLabel: [
                    'Bedsheets', 'Bedding Sets', 'Blankets', 'Dohars & Quilts', 'Comforters', 'Bed Covers', 'MattressProtectors', 'Quilt & Duvet Covers'
                ],
                href: '#',
            },

            {
                label: 'CUSHIONS & PILLOWS',
                subLabel: ['Cushions', 'Pillows', 'Bed Wedges & Neck Pillows', 'Bolsters', 'Cushion Covers', 'Pillow Covers',
                    <strong>'RUGS', 'CARPETS & MATS'</strong>
                ],
                href: '#',
            },
        ],
        col2: [
            {
                label: 'CURTAIN & ACCESSORIES',
                subLabel: ['Window Curtains', 'Door Curtains'

                ],
                href: '#',
            },

            {
                label: 'KITCHEN',
                subLabel: ['Cookware & Cutlery', 'Bakeware', 'Kitchen Tools', 'Kitchen Aprons', 'Gloves & Towel', 'Kitchen Organisers'
                ],
                href: '#',
            },
            {
                label: 'DINING',
                subLabel: ['Serveware & Drinkware', 'Table Linen Sets', 'Table Covers & Runners', 'Table Napkins', 'Placemats & Coasters',
                    <strong>STATIONERY & ORGANISERS </strong>
                ],
                href: '#',
            },
        ],
        col3: [
            {
                label: 'HOME DECOR',
                subLabel: ['Wall Decor', 'Wall Shelves', 'Clocks', 'Photo Frames', 'Mirrors', 'Lamp', 'Diyas & Candle', 'Home Fragnance', 'Plants & Flowers'
                ],
                href: '#',
            },
            {
                label: 'FESTIVE GIFTS',
                subLabel: ['Bells & Wind Chimes', 'Decorative Pots', 'Plates & Jars', 'Fengshui', 'Indoor Fountains', 'Religious Idols', 'Vases',
                    <strong>GARDENING & PLANTERS</strong>
                ],
                href: '#',
            },
        ],

        col4: [
            {
                label: 'BATH',
                subLabel: ['Bath Towel & Robes', 'Hand & Face Towels', 'Towel Sets', 'Bath Curtains & Mats', 'Bathroom Organisers', 'Laundry Baskets & Dryers', 'Holders & More',
                    <strong>HOME ESSENTIALS</strong>
                ],
                href: '#',
            },

            {
                label: 'FEATURED STORIES',
                subLabel: ['GIFT For Everyone Under 999', 'Winter Carnival Upto 60', 'Kids Room Min 40', 'Heritage Of India'
                ],
                href: '#',
            },

        ],

    },
];
"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel(props) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
    
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {props.data.map((image, index) => (
          <Box
            key={index}
            height={"100%"}
            position="relative"
            margin={"0px"}
            // backgroundPosition="center"
            backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            backgroundImage={`url(${image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="500px" position="relative">
              <Stack
                spacing={0}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                marginBottom={"0px"}
              ></Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

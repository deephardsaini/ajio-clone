"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Banner(props) {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Image
        transition={"transform .6s ease-in"}
        will-change={"transform"}
        alt={"Login Image"}
        src={props.image}
      />
    </Stack>
  );
}

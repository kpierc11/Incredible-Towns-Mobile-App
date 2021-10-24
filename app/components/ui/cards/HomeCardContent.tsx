import React from "react";
import {
  Image,
  Text,
  Center,
  Box,
  Stack,
  Heading,
  HStack,
  AspectRatio,
  Icon,
} from "native-base";

import { View, Button } from "react-native";
import images from "../../../assets/images";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ICustomCard {
  image?: string;
  heading?: string;
  text?: string;
  subText?: string;
  buttonTitle?: string;
}

function HomeCardContent({
  image,
  heading,
  text,
  subText,
  buttonTitle,
}: ICustomCard) {
  return (
    <Box
      shadow="2"
      rounded="lg"
      w={{ base: "64", md: "80", lg: "md" }}
      _light={{ bg: "coolGray.50" }}
      _dark={{ bg: "gray.700" }}
      width="90%"
    >
      <Image source={images.logoImage} alt="image base" resizeMode={"contain"} />

      <Text bold position="absolute" color="coolGray.50" top="0" m="4">
        NEWS
      </Text>

      <Stack space="2" p="4">
        <Text color="gray.400">October 21, 2021</Text>

        <Heading size={["md", "lg", "md"]} fontWeight="medium">
          The Garden City
        </Heading>

        <Text isTruncated noOfLines={["4", "4", "4"]}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. It is located in southern India on the Deccan Plateau.The
          city is also known for its parks and nightlife. Bangalore is the major
          center of India's IT industry, popularly known as the Silicon Valley
          of India.
        </Text>
      </Stack>

      <HStack space="3" px="4" pb="4">
        <Ionicons name="chevron-forward-circle-outline" size={20} color={"emerald.800"} />
        <Text
          _light={{ color: "emerald.800" }}
          _dark={{ color: "emerald.300" }}
        >
          Find out more
        </Text>
      </HStack>
    </Box>
  );
}

export default HomeCardContent;

import React from "react";
import { Image, Text, Center, Box, Stack, Heading, HStack } from "native-base";

import { View, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ICustomCard {
  image: string;
  heading: string;
  text?: string;
  subText: string;
  buttonTitle?: string;
}

function HomeCard({ image, heading, text, subText, buttonTitle }: ICustomCard) {
  return (
    <Box
      rounded="lg"
      shadow={5}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
      height={250}
    >
      <Box>
        <Image source={image} height={150} resizeMode={"contain"} alt="image" />

        <Center
          bg="#2b523d"
          _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          {subText}
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={3}>
          <Heading size="md" ml="-1">
            {heading}
          </Heading>
        </Stack>

        <HStack px="1">
          <Ionicons
            name="chevron-forward-circle-outline"
            size={20}
            color={"emerald.800"}
          />
          <Button
            title={buttonTitle}
            color="black"
            onPress={() => {}}
            accessibilityLabel="Learn more about this purple button"
          ></Button>
        </HStack>

        <HStack alignItems="center" space={4}>
          <HStack alignItems="center"></HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default HomeCard;

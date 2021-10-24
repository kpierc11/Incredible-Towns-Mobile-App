import React from "react";
import {
  Image,
  Text,
  Center,
  Box,
  Stack,
  Heading,
  Button,
  View,
} from "native-base";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { SocialIcon } from "react-native-elements";
import { Linking } from "react-native";

interface ICustomCard {
  uri: string;
  heading: string;
  text: string;
  date?: string;
}

function DirectoryCard({ uri, heading, text, date }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        maxWidth="100%"
        width="350px"
        display="flex"
        justifyContent="center"
        marginBottom="30px"
        marginTop="20px"
      >
        <Image
          source={{
            uri: uri,
          }}
          alt="image base"
          resizeMode="cover"
          height={200}
          roundedTop="lg"
        />
        <Stack space={4} p={[4, 4, 8]}>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {heading}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={4} color="gray.700">
            {text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default DirectoryCard;

import React from "react";
import {
  Image,
  Text,
  Center,
  Box,
  Stack,
  Heading,
  Button,
  Icon,
} from "native-base";
import { backgroundImage, justifyContent, right } from "styled-system";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ICustomCard {
  uri: string;
  heading: string;
  text: string;
  date?: string;
}

function EventCard({ uri, heading, text, date }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box bg={"white"} shadow={5} rounded="lg" height="85%">
        <Image
          source={{
            uri: uri,
          }}
          alt="image base"
          resizeMode="cover"
          height={250}
          roundedTop="md"
          overflow='hidden'
        />

        <Box bg={'black'} opacity={.2} rounded="lg" style={{
              height:250,
              width:'100%',
              padding: "1%",
              position: "absolute",
              right: 0,
            }}>
          <MaterialIcons
            name="calendar-today"
            size={25}
            color={"white"}
            style={{
              textAlign: "right",
              
            }}
          ></MaterialIcons>
        </Box>

        <Stack space={5} p={[4, 4, 8]}>
          <Text lineHeight={[5, 5, 7]} noOfLines={4}>
            March 22, 2021
          </Text>

          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {heading}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={4}>
            {text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default EventCard;

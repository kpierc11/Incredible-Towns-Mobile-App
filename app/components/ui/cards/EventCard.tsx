import React from "react";
import { Image, Text, Center, Box, Stack, Heading, Icon } from "native-base";
import { backgroundImage, justifyContent, right } from "styled-system";
import { Button, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ICustomCard {
  uri: string;
  heading: string;
  text: string;
  date?: string;
}

function EventCard({ uri, heading, text, date }: ICustomCard) {
  return (
    <Center flex={1} paddingTop="5%">
      <Box bg={"white"} shadow={5} rounded="lg" height="95%">
        <Image
          source={{
            uri: uri,
          }}
          alt="image base"
          resizeMode="cover"
          height={250}
          roundedTop="md"
          overflow="hidden"
        />

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
          <View style={{ backgroundColor: "#2b523d" , borderRadius:5 }}>
            <Button
              title="Register"
              color="white"
              onPress={()=>{}}
              accessibilityLabel="Learn more about this purple button"
            ></Button>
          </View>
        </Stack>
      </Box>
    </Center>
  );
}

export default EventCard;

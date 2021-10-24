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
  Icon,
} from "native-base";
import { SocialIcon } from "react-native-elements";
import { Linking } from "react-native";

interface ICustomCard {
  image: string;
  name: string;
  description: string;
  location: string;
}

function BusinessCard({ image, name, description, location }: ICustomCard) {
  return (
    <Center flex={1} alignContent={"center"}>
      <Box width={"100%"} rounded="lg" marginTop={10} marginBottom={10}>
        <Image
          source={{
            uri: image,
          }}
          alt="image base"
          resizeMode="contain"
          height={150}
          roundedTop="md"
        />
        <Stack space={5} p={[4, 4, 8]}>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {name}
          </Heading>
          <Text lineHeight={[5, 5, 7]} color="gray.700">
            {description}
          </Text>
        </Stack>
        <View flexDirection={"row"} justifyContent={"center"}>
          
          <SocialIcon
            type="facebook"
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          />
          <SocialIcon raised={false} type="twitter" />
          <SocialIcon light type="instagram" />
        </View>
      </Box>
    </Center>
  );
}

export default BusinessCard;

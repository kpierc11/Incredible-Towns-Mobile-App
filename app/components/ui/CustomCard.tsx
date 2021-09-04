import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
  ScrollView,
} from "native-base";

interface ICustomCard {
  uri:String;
  heading:String
  text:String;

}

function CustomCard({uri,heading,text}:ICustomCard) {
  return (
    <Center flex={1}>
    <Box
      bg="white"
      shadow={2}
      rounded="lg"
      maxWidth="90%"
      display='flex'
      justifyContent="center"
      marginBottom="30px"
      marginTop="20px"
    >
      <Image
        source={{
          uri: uri
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
          {heading}
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
          {text}
        </Text>
      </Stack>
    </Box>
    </Center>
  );
}

export default CustomCard

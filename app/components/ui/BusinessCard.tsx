import React from "react";
import { Image, Text, Center, Box, Stack, Heading, Button } from "native-base";

interface ICustomCard {
  image: string;
  name: string;
  description: string;
  location: string;
}

function BusinessCard({ image, name ,description,location }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box
       bg={'white'}
        shadow={5}
        rounded="lg"
        height='100%'
        width='90%'
      
      >
        <Image
          source={{
            uri: image,
          }}
          alt="image base"
          resizeMode="contain"
          height={'100%'}
          roundedTop="md"
        />
        <Stack space={10} p={[4, 4, 8]}>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {name}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={4} color="gray.700">
            {description}
          </Text>
          <Button
            onPress={() => console.log("hello world")}
            colorScheme={"green"}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default BusinessCard;
import React from "react";
import { Image, Text, Center, Box, Stack, Heading, Button } from "native-base";

interface ICustomCard {
  uri: string;
  heading: string;
  text: string;
  date?: string;
}

function EventCard({ uri, heading, text, date }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box
       bg={'white'}
        shadow={5}
        rounded="lg"
        height='80%'
      
      >
        <Image
          source={{
            uri: uri,
          }}
          alt="image base"
          resizeMode="cover"
          height={'45%'}
          roundedTop="md"
        />
        <Stack space={10} p={[4, 4, 8]}>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {heading}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={4} color="gray.700">
            {text}
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

export default EventCard;

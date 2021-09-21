import React from "react";
import { Image, Text, Center, Box, Stack, Heading, Button } from "native-base";

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
          height={150}
          roundedTop="lg"
        />
        <Stack space={4} p={[4, 4, 8]}>
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

export default DirectoryCard;

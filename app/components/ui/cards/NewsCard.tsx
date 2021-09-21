import React from "react";
import { Image, Text, Center, Box, Stack, Heading } from "native-base";

interface ICustomCard {
  uri: string;
  heading: string;
  text: string;
  date?: string;
}

function NewsCard({ uri, heading, text, date }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        maxWidth="90%"
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
          roundedTop="md"
        />
        <Stack space={4} p={[4, 4, 8]}>
          <Text color="gray.400">{date}</Text>
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

export default NewsCard;

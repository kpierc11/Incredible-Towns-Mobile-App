import React from "react";
import { Image, Text, Center, Box, Stack, Heading } from "native-base";

interface ICustomCard {
  date: string;
  description: string;
  image: string;
  title: string;
}

function NewsCard({ date, description, image, title }: ICustomCard) {
  return (
    <Center flex={1}>
      <Box
        bg="blue"
        shadow={2}
        rounded="lg"
        maxWidth="90%"
        display="flex"
        justifyContent="center"
        marginBottom="30px"
        marginTop="20px"
        height='200px'
      >
        <Image
          source={{
            uri: image,
          }}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
        />
        <Stack space={4} p={[4, 4, 8]}>
          <Text color="gray.400">{date}</Text>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            {title}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={2} color="gray.700">
            {description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default NewsCard;

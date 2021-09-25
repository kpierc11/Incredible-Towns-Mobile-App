import React from "react";
import { Image, Text, Center, Box, Stack, Heading, Button } from "native-base";

interface ICustomCard {
  date: string;
  description: string;
  image: string;
  title: string;
}

function NewsArticleCard({date, description, image, title }: ICustomCard) {
  return (
    <Center flex={1}>
    <Box
     bg={'white'}
      shadow={5}
      rounded="lg"
      height='70%'
    
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
      <Stack space={10} p={[4, 4, 8]} >
          {date}
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
          {title}
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={4} color="gray.700">
          {description}
        </Text>
      </Stack>
    </Box>
  </Center>
  );
}

export default NewsArticleCard;
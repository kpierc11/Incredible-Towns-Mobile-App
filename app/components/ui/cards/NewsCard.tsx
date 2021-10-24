import React from "react";
import { Image, Text, Center, Box, Stack, Heading, HStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

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
          <Text lineHeight={[5, 5, 7]} noOfLines={4} color="gray.700">
            {description}
          </Text>
        </Stack>
        <HStack space="3" px="4" pb="4">
           <Ionicons
            name="chevron-forward-circle-outline"
            size={20}
            color={"emerald.800"}
          />

          <Text
            _light={{ color: "emerald.800" }}
            _dark={{ color: "emerald.300" }}
          >
            Find out more
          </Text>
        </HStack>
      </Box>
    </Center>
  );
}

export default NewsCard;

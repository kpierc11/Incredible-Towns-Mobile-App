import { Box, Stack, Image, Heading, Text } from "native-base";
import React from "react";

function FeaturedPromoCard() {
  return (
    <Box
      bg="white"
      shadow={5}
      py={4}
      px={3}
      rounded="md"
      alignSelf="center"
      width={200}
      height={300}
      marginTop="20px"
      marginBottom="20px"
      marginLeft={5}
    >
      <Box justifyContent="space-between" height={"100%"} width={"100%"}>
        <Image
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
          }}
          width={"100%"}
          alt="Alternate Text"
          size="xl"
        />
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              10% off
            </Heading>
            <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
              Macdonalds
            </Text>
          </Stack>
          <Text fontWeight="400">March 22 - 30 2021</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default FeaturedPromoCard;

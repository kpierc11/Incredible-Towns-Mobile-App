import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Stack,
  Heading,
  View,
} from "native-base";

function PromotionCard() {
  return (
    <View flexBasis={"50%"}>
      <Box
        bg="white"
        shadow={5}
        py={4}
        px={3}
        rounded="md"
        alignSelf="center"
        width={"95%"}
        height={300}
        marginTop="20px"
        marginBottom="20px"
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
    </View>
  );
}

export default PromotionCard;

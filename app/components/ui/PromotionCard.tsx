import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

function PromotionCard() {
  return (
    <NativeBaseProvider>
      <Box
        bg="white"
        shadow={5}
        py={4}
        px={3}
        rounded="md"
        alignSelf="center"
        width={375}
        height={'90%'}
        marginTop='20px'
        marginBottom='20px'
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space={2}>
              <Text fontSize="sm" color="black">
                Today @ 9PM
              </Text>
              <Text color="black" fontSize="lg">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable
              rounded="sm"
              bg="#2b523d"
              alignSelf="flex-start"
              py={2}
              px={3}
            >
              <Text
                textTransform="uppercase"
                fontSize={'sm'}
                fontWeight="bold"
                color="white"
              >
                Get Coupon
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: 'https://www.nicepng.com/png/detail/339-3395329_pawerup-member-10-off-for-all-retail-items.png',
            }}
            alt="Aang flying and surrounded by clouds"
            height={100}
            rounded="full"
            width={100}
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default PromotionCard
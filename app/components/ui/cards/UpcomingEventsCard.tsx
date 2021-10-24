import {
  AspectRatio,
  Box,
  HStack,
  Stack,
  Text,
  Image,
  Heading,
  Center,
} from "native-base";
import React from "react";

function UpcomingEventsCard() {
  return (

      <Box
        shadow={5}
        rounded="lg"
        w={{ base: "64", md: "80", lg: "md" }}
       
        marginLeft={5}
        marginBottom={10}
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "gray.700" }}
      >
        <AspectRatio w="100%">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=400",
            }}
            alt="image base"
          />
        </AspectRatio>

        <Text bold position="absolute" color="coolGray.50" top="0" m="4">
          
        </Text>

        <Stack space="2" p="4">
          <Text color="gray.400">October 23, 2021</Text>

          <Heading size={["md", "lg", "md"]} fontWeight="medium">
            The Garden City
          </Heading>

          <Text isTruncated noOfLines={["4", "4", "4"]}>
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. It is located in southern India on the Deccan Plateau.The
            city is also known for its parks and nightlife. Bangalore is the
            major center of India's IT industry, popularly known as the Silicon
            Valley of India.
          </Text>
        </Stack>

        <HStack space="3" px="4" pb="4">
          <Text
            _light={{ color: "emerald.800" }}
            _dark={{ color: "emerald.300" }}
          >
            Find out more
          </Text>
        </HStack>
      </Box>
    
  );
}

export default UpcomingEventsCard;

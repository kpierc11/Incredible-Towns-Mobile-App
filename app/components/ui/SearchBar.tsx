import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar() {
  return (
    <VStack space={8} width="100%" marginTop="20px" marginBottom="20px">
      <Center flex={1}>
        <VStack width="90%" space={2}>
          <Input
            placeholder="Search Businesses"
            bg="#fff"
            width="100%"
            borderRadius={4}
            py={3}
            px={1}
            fontSize={14}
            _web={{
              _focus: {
                borderColor: "muted.300",
                style: { boxShadow: "none" },
              },
            }}
            InputLeftElement={
              <Icon
                size="sm"
                m={2}
                size={6}
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={
              <Icon
                size="sm"
                m={2}
                size={6}
                color="gray.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />
        </VStack>
      </Center>
    </VStack>
  );
}

export default SearchBar;

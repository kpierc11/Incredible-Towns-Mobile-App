import React, { useState } from "react";
import { VStack, Input, Icon, Center, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryModal from "../modal/CategoryModal";

function SearchBar() {
  const [searchData, setSearchData] = useState("");

  console.log(searchData);

  return (
    <VStack space={8} width="100%" marginTop="20px" marginBottom="20px">
      <Center flex={1}>
        <VStack width="90%" space={2}>
          <Input
            onChangeText={(searchData) => {
              setSearchData(searchData);
            }}
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
                as={<MaterialIcons name="filter-list" />}
                onPress={() => {
                  <CategoryModal modalState={true} />;
                }}
              />
            }
          />
        </VStack>
      </Center>
    </VStack>
  );
}

export default SearchBar;

import React, { useCallback, useEffect, useState } from "react";
import {
  Actionsheet,
  Box,
  Center,
  Icon,
  Input,
  ScrollView,
  useDisclose,
  VStack,
} from "native-base";
import firebaseConfig from "../../firebase";
import DirectoryCard from "../ui/cards/DirectoryCard";
import Loading from "../ui/Loading";
import {
  Alert,
  Modal,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
} from "react-native";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { justifyContent } from "styled-system";

function DirectoryScreen({ navigation, modalState }: any) {
  const [directoryCards, setDirectoryCards]: any = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [searchData, setSearchData] = useState("");

  const categories = [
    "Accounting & Tax Services",
    "Arts, Culture & Entertainment",
    "Auto Sales & Service",
    "Banking & Finance",
    "Business Services",
    "Community Organizations",
    "Dentists & Orthodontists",
    "Education",
    "Health & Wellness",
    "Health Care",
    "Home Improvement",
    "Insurance",
    "Internet & Web Services",
    "Legal Services",
    "Lodging & Travel",
    "Marketing & Advertising",
    "News & Media",
    "Pet Services",
    "Real Estate",
    "Restaurants & Nightlife",
    "Shopping & Retail",
    "Sports & Recreation",
    "Transportation",
    "Utilities",
    "Wedding, Events & Meetings",
  ];

  const actionItems = categories.map((element, index) => {
    return <Actionsheet.Item key={index}>{element}</Actionsheet.Item>;
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    text: {
      fontSize: 16,
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#f0f0f0",
      backgroundColor: "#f9f9f9",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      height: 200,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      height: "65%",
      opacity: 0.99,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      width: 250,
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  const businessRef = firebaseConfig
    .firestore()
    .collection("Business")
    .orderBy("name");

  useEffect(() => {
    businessRef.get().then((snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs.map((doc) => {
          return (
            <Pressable
              key={doc.id}
              delayLongPress={180}
              onLongPress={() => {
                navigation.navigate("Business", {
                  image: doc.get("image"),
                  name: doc.get("name"),
                  description: doc.get("description"),
                  location: doc.get("location"),
                });
              }}
            >
              <DirectoryCard
                key={doc.get("name")}
                uri={doc.get("image")}
                heading={doc.get("name")}
                text={doc.get("description")}
              />
            </Pressable>
          );
        });
        setDirectoryCards(data);
        setLoading(false);
        setRefreshing(false);
      } else {
        console.log("This document does not exist.");
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }
      >
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
                py={4}
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
                    m={2}
                    size={6}
                    color="gray.400"
                    as={<MaterialIcons name="search" />}
                  />
                }
                InputRightElement={
                  <Icon
                    m={2}
                    size={6}
                    color="gray.400"
                    as={<MaterialIcons name="filter-list" />}
                    onPress={() => {
                      onOpen();
                    }}
                  />
                }
              />
            </VStack>
          </Center>
        </VStack>
        {directoryCards}
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content>
            <Text style={{fontSize:15, paddingBottom:20}}>Categories</Text>

            <ScrollView width={"100%"}>{actionItems}</ScrollView>
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    );
  }
}

export default DirectoryScreen;

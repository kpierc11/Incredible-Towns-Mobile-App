import React, { useEffect, useState } from "react";
import { ScrollView } from "native-base";
import SearchBar from "../ui/searchBar/SearchBar";
import firebaseConfig from "../../firebase";
import DirectoryCard from "../ui/cards/DirectoryCard";
import Loading from "../ui/Loading";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

function Directory({ navigation }: any) {
  const [directoryCards, setDirectoryCards]: any = useState([]);
  const [isLoading, setLoading] = useState(true);

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
  });

  useEffect(() => {
    firebaseConfig
      .firestore()
      .collection("Business")
      .get()
      .then((snapshot) => {
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
        } else {
          console.log("This document does not exist.");
        }
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <ScrollView>
        <SearchBar />
        {directoryCards}
      </ScrollView>
    );
  }
}

export default Directory;

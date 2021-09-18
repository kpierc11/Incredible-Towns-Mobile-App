import React, {
  ReactComponentElement,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { ScrollView, View } from "native-base";
import SearchBar from "../ui/SearchBar";
import firebaseConfig from "../../firebase";
import DirectoryCard from "../ui/DirectoryCard";
import Loading from "../ui/Loading";
import BusinessScreen from "./BusinessScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StyleSheet} from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { shadow } from "styled-system";

function Directory({ navigation }: any) {
  const [directoryCards, setDirectoryCards]: any = useState([]);
  const [isLoading, setLoading] = useState(true);
  const DirectoryStack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    text: {
      fontSize: 16
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9'
    }
  });

  useEffect(() => {
    firebaseConfig
      .firestore()
      .collection("Business")
      .get()
      .then((snapshot) => {
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
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white',
                    
                    
                },
                styles.wrapperCustom
              ]}
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

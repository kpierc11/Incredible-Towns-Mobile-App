import { ScrollView, View } from "native-base";
import { Image, Text } from "react-native";
import React from "react";
import BusinessCard from "../ui/cards/BusinessCard";
import {StyleSheet} from 'react-native';

function BusinessScreen({ route, navigation }: any) {
  const { image, name, description, location } = route.params;
  console.log(image);
  const styles = StyleSheet.create({
    container:{
      height:'',
    },
  })
  return (
    <ScrollView style={{}}>
      <BusinessCard
        image={image}
        name={name}
        description={description}
        location={location}
      />
    </ScrollView>
  );
}

export default BusinessScreen;

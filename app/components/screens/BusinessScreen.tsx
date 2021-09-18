import { ScrollView, View } from "native-base";
import { Image, Text } from "react-native";
import React from "react";
import BusinessCard from "../ui/BusinessCard";

function BusinessScreen({ route, navigation }: any) {
  const { image, name, description, location } = route.params;
  console.log(image);
  return (
    <ScrollView>
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

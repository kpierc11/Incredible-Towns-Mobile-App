import { Box, ScrollView, View } from "native-base";
import React from "react";
import BusinessCard from "../ui/cards/BusinessCard";
import { StyleSheet } from "react-native";

function BusinessScreen({ route, navigation }: any) {
  const { image, name, description, location } = route.params;

  return (
    
      <ScrollView backgroundColor={'white'}>
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

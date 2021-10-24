import React from "react";
import { View, Text, ScrollView } from "react-native";
import { flexDirection } from "styled-system";
import PromotionCard from "../ui/cards/PromotionCard";
import SearchBar from "../ui/searchBar/SearchBar";

function Promotions() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 5,
        }}
      >
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
        <PromotionCard></PromotionCard>
      </View>
    </ScrollView>
  );
}

export default Promotions;

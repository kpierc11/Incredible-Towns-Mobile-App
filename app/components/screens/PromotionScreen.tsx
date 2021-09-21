import React from "react";
import { View, Text, ScrollView } from "react-native";
import PromotionCard from "../ui/cards/PromotionCard";
import SearchBar from "../ui/searchBar/SearchBar";

function Promotions() {
  return (
    <ScrollView>
      <SearchBar/> 
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
      <PromotionCard/>
    </ScrollView>
  );
}

export default Promotions;

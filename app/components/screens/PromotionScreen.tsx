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
        <PromotionCard logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdBZ6dZpuddvGtkJIar48FLsBtIbZC2-VCpORxjzO2AXScYEzPNGCMUUS_YtcA6mfr-E&usqp=CAU"}></PromotionCard>
        <PromotionCard logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO5dX4jvsnR6bV_TTseQllVAoxTWv9kt_l5WJdZbshcVCLYXKFuUmGVszHPO0VCp4BuA&usqp=CAU'}></PromotionCard>
        <PromotionCard logo={'https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png'}></PromotionCard>
        <PromotionCard logo={'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png'}></PromotionCard>
        <PromotionCard logo={'https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png'}></PromotionCard>
        <PromotionCard logo={'https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-3.05.34-PM.png'}></PromotionCard>
        <PromotionCard logo={'https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-3.05.34-PM.png'}></PromotionCard>
        <PromotionCard logo={'https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png'}></PromotionCard>
        <PromotionCard logo={'https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-3.05.34-PM.png'}></PromotionCard>
      </View>
    </ScrollView>
  );
}

export default Promotions;

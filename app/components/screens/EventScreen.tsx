import Ionicons from "@expo/vector-icons/build/Ionicons";
import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { borderRight } from "styled-system";
import EventCard from "../ui/cards/EventCard";

function Events() {
  const [activeItem, setActiveItem] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    <EventCard
      uri={
        "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM="
      }
      heading={"Find A Local Business"}
      text={
        "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://static01.nyt.com/images/2021/09/01/dining/01summer4/merlin_193871379_f965ee02-fc99-4963-bcde-9434de11c273-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://i.insider.com/594d6863298d4a3b078b470c?width=700"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM="
      }
      heading={"Find A Local Business"}
      text={
        "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://static01.nyt.com/images/2021/09/01/dining/01summer4/merlin_193871379_f965ee02-fc99-4963-bcde-9434de11c273-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://i.insider.com/594d6863298d4a3b078b470c?width=700"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></EventCard>,
  ]);

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const renderItem = ({ item, index }: any) => {
    return item;
  };

  return (
    <>
      
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveItem(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeItem}
        containerStyle={{ marginBottom: 5 }}
      ></Pagination>
    </>
  );
}

export default Events;

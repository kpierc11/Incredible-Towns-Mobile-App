import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import EventCard from "../ui/cards/EventCard";

function Events() {
  const [activeItem, setActiveItem] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    <EventCard
      uri={
        "https://tricities.incredibletowns.com/wp-content/uploads/2019/08/Stateline-Bar-and-Grille-Bristol-TN-300x169.jpg"
      }
      heading={"Find A Local Business"}
      text={
        "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
      }
    ></EventCard>,
    <EventCard
      uri={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
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
        containerStyle={{marginBottom:20}}
      ></Pagination>
    </>
  );
}

export default Events;

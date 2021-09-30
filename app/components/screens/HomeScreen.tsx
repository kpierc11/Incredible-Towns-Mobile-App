import React, { useState } from "react";
import { ScrollView } from "native-base";
import HomeCard from "../ui/cards/HomeCard";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions, View } from "react-native";

function HomeScreen() {
  const [activeItem, setActiveItem] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    <HomeCard
      uri={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
      }
      heading={"Find A Local Business"}
      text={
        "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
      }
    ></HomeCard>,
    <HomeCard
      uri={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></HomeCard>,
    <HomeCard
      uri={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
      }
      heading={
        "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
      }
      text={
        "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
      }
    ></HomeCard>,
  ]);
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2) / 5);

  const renderItem = ({ item, index }: any) => {
    return item;
  };
  return (
    <View style={{ height: "100%"}}>
      <View style={{height:'50%'}}>

      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveItem(index)}
      />

      </View>
      
      <View style={{height:'50%'}}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveItem(index)}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

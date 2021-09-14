import React from "react";
import { ScrollView } from "native-base";
import HomeCard from "../ui/HomeCard";

function HomeScreen() {
  return (
    <ScrollView
      snapToInterval={400} //your element width
      snapToAlignment={"center"}
    >
      <HomeCard
        uri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
        }
        heading={"Find A Local Business"}
        text={
          "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
        }
      ></HomeCard>
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
      ></HomeCard>
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
      ></HomeCard>
    </ScrollView>
  );
}

export default HomeScreen;

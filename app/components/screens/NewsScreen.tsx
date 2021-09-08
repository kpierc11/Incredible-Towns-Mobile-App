import React from "react";
import { ScrollView } from "native-base";
import NewsCard from "../ui/NewsCard";

function NewsScreen() {
  let date = new Date();
  let month = String(date.getMonth());
  let day = String(date.getDay());
  let year = String(date.getFullYear());
  let currentDate = month + "-" + day + "-" + year;

  return (
    <ScrollView>
      <NewsCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
        date={currentDate}
      ></NewsCard>
      <NewsCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
        date={currentDate}
      ></NewsCard>
      <NewsCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
        date={currentDate}
      ></NewsCard>
      <NewsCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
        date={currentDate}
      ></NewsCard>
    </ScrollView>
  );
}

export default NewsScreen;

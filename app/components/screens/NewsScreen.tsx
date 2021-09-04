import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
  ScrollView,
} from "native-base";
import CustomCard from "../ui/CustomCard";

function NewsScreen() {
  return (
    <ScrollView>
      <CustomCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
      ></CustomCard>
      <CustomCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
      ></CustomCard>
      <CustomCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
      ></CustomCard>
      <CustomCard
        uri={
          "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
        }
        heading={
          "The Stunning Dawki River in Meghalaya is So Clear That Boats AppearFloating in Air"
        }
        text={
          "With lush green meadows, rivers clear as crystal, pine-covered hills,gorgeous waterfalls, lakes and majestic forests, the mesmerizing Meghalaya is truly a Nature lover’s paradise…"
        }
      ></CustomCard>
    </ScrollView>
  );
}

export default NewsScreen;

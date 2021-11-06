import React, { useState } from "react";
import { Center, Heading, ScrollView } from "native-base";
import HomeCard from "../ui/cards/HomeCard";
import { Dimensions, View } from "react-native";
import images from "../../assets/images";
import { justifyContent } from "styled-system";
import HomeCardContent from "../ui/cards/HomeCardContent";
import Carousel, { Pagination } from "react-native-snap-carousel";
import UpcomingEventsCard from "../ui/cards/UpcomingEventsCard";
import PromotionCard from "../ui/cards/PromotionCard";
import FeaturedPromoCard from "../ui/cards/FeaturedPromoCard";

function HomeScreen() {
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
  const [activeItem, setActiveItem] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    <View style={{ padding: 20 }}>
      <HomeCard
        image={images.businessImg}
        heading={"Find A Local Business"}
        text={
          "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia."
        }
        subText={"Directory"}
        buttonTitle={"See Directory"}
        link={'https://tricities.incredibletowns.com/events'}
      ></HomeCard>
    </View>,
    <View style={{ padding: 20 }}>
      <HomeCard
        image={images.eventsImg}
        heading={"Find Local Events"}
        text={
          "Find Local Business Listings for Restaurants, Retail, Hotels, Service Businesses, Beauty Salons, and more in the Kingsport / Johnson City / Bristol and surrounding cities of Northeast Tennessee and Southwest Virginia. Want more exposure and better search rankings for your Business? Add a Free Business Listing or purchase a Featured Northeast Tennessee Area Business Listing on our website."
        }
        subText={"Events"}
        buttonTitle={"Find Events"}
        link={'https://tricities.incredibletowns.com/events/'}
      ></HomeCard>
    </View>,
    <View style={{ padding: 20 }}>
      <HomeCard
        image={images.networkingImg}
        heading={"Promote Your Business"}
        text={
          "Does your Johnson City / Kingsport / Bristol metro area business need an internet marketing service to help customers find it online? You need Web Marketing from Incredible Towns. When customers and clients want to find your business products and services, they use online search or social media to find you. We help you get found wherever people are looking for you."
        }
        subText={"Marketing"}
        buttonTitle={"Reach More People"}
        link={'https://tricities.incredibletowns.com/tri-cities-marketing'}
      ></HomeCard>
    </View>,
  ]);

  const renderItem = ({ item, index }: any) => {
    return item;
  };

  return (
    <>
      <ScrollView height={"100%"}>
        <Heading size={"md"} padding={5}>
          Our Services
        </Heading>

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
          containerStyle={{marginBottom:-20}}
        ></Pagination>

        <Heading size={"md"} padding={5}>
          Upcoming Lunches
        </Heading>
        <ScrollView
          snapToInterval={100} //your element width
          horizontal={true}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
        >
          <UpcomingEventsCard link={"https://www.meetup.com/Tri-Cities-TN-Business-Networking/"}></UpcomingEventsCard>
          <UpcomingEventsCard link={"https://www.meetup.com/Tri-Cities-TN-Business-Networking/"}></UpcomingEventsCard>
          <UpcomingEventsCard link={"https://www.meetup.com/Tri-Cities-TN-Business-Networking/"}></UpcomingEventsCard>
        </ScrollView>

        <Heading size={"md"} padding={5}>
          Featured Promotions
        </Heading>
        <ScrollView
          horizontal={true}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
        >
          <FeaturedPromoCard></FeaturedPromoCard>
          <FeaturedPromoCard></FeaturedPromoCard>
          <FeaturedPromoCard></FeaturedPromoCard>
        </ScrollView>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

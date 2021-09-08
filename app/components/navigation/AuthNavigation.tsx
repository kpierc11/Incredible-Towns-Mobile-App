import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import Promotions from "../screens/Promotions";
import Directory from "../screens/Directory";
import Events from "../screens/Events";

const Tab = createBottomTabNavigator();

const isSignedIn = true;

function AuthNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#2b523d" },
        headerTitleStyle: { color: "white" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "News") {
            iconName = focused ? "newspaper-outline" : "newspaper-outline";
          } else if (route.name === "Promotions") {
            iconName = focused ? "pricetag-outline" : "pricetag-outline";
          } else if (route.name === "Events") {
            iconName = focused ? "calendar-outline" : "calendar-outline";
          } else if (route.name === "Directory") {
            iconName = focused ? "business-outline" : "business-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ce4927",
        tabBarInactiveTintColor: "#2b523d",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Promotions" component={Promotions} />
      <Tab.Screen name="Directory" component={Directory} />
    </Tab.Navigator>
  );
}

export default AuthNavigation;

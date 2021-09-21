import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import PromotionScreen from "../screens/PromotionScreen";
import EventScreen from "../screens/EventScreen";
import DirectoryScreen from "../screens/DirectoryScreen";
import BusinessScreen from "../screens/BusinessScreen";
import HeaderBar from "../ui/headerBar/HeaderBar";



const DirectoryStack = createNativeStackNavigator();

function DirectoryStackScreen() {
  return (
    <DirectoryStack.Navigator>
      <DirectoryStack.Screen name="Incredible Towns Partners" component={DirectoryScreen}/>
      <DirectoryStack.Screen name="Business" component={BusinessScreen} />
    </DirectoryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Promotions" component={PromotionScreen} />
      <Tab.Screen name="Directory" component={DirectoryStackScreen} />
    </Tab.Navigator>
  );
}

export default AuthNavigation

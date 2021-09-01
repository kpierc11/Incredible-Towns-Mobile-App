import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const isSignedIn = true;

function AuthNavigation() {
  return (
    isSignedIn ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name="Login" component={LoginScreen} />
      </>
    )
  )
}

export default AuthNavigation;

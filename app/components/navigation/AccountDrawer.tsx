import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Drawer } from "native-base";
import React from "react";
import { View, Text } from "react-native";

function AccountDrawer(props: any) {
  return (
    <View style={{ flex: 1}}>
      <DrawerContentScrollView>
      <Avatar
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
        size="lg"
      >
        SS
      </Avatar>
      </DrawerContentScrollView>
    </View>
  );
}

export default AccountDrawer;

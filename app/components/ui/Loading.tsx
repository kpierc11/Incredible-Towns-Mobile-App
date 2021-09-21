import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function Loading() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

 return( <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#2b523d" />
  </View>)
}

export default Loading;

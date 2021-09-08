import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import "firebase/auth";
import "firebase/firestore";

import SignUp from "../SignUp";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      borderColor: "#2E8B57",
      paddingTop: "10%",
    },
    inner: {
      padding: 10,
      height: "90%",
      width: "90%",
      alignItems: "center",
      justifyContent: "space-around",
    },
    inputField: {
      width: "90%",
      borderColor: "#DCDCDC",
      borderWidth: 1,
      borderRadius: 1,
      padding: 15,
    },
    button: {
      backgroundColor: "#2E8B57",
      borderColor: "black",
      padding: 3,
      width: "90%",
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        <View style={{ width: "100%", height: "30%", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://tricities.incredibletowns.com/wp-content/themes/CubeCreativeDesign/images/incredible_towns_triCities_logo.png",
            }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              SignUp(email, password);
            }}
            title="Login"
            color="white"
            accessibilityLabel="Login to Your Account"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>Don't Have An Account?</Text>
          <Text
            style={{ color: "#6495ED" }}
            onPress={() => {
              Linking.openURL(
                "https://tricities.incredibletowns.com/login/?page_type=register"
              );
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

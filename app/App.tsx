import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigation from './components/navigation/AuthNavigation'
import firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlvnFlaj-XzAbCk7mJHNBZLhbMfbY8ssg",

  authDomain: "incredible-towns-app.firebaseapp.com",

  projectId: "incredible-towns-app",

  storageBucket: "incredible-towns-app.appspot.com",

  messagingSenderId: "528293074465",

  appId: "1:528293074465:web:b741d301f97935fa66b560",

  measurementId: "G-T22JZ09M6C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


export default function App() {

  return (
    <AuthNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const OnboardingTwo = () => {
  return (
    <WebView
      style={{ height: "100%", width: "100%" }}
      source={{ uri: "https://voice-gpt-69.vercel.app/" }}
    />
  );
};

export default OnboardingTwo;

const styles = StyleSheet.create({});

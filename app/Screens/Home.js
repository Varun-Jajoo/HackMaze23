import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

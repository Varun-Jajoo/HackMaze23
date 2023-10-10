import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";

const You = () => {
  
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <Text>You</Text>
    </SafeAreaView>
  );
};

export default You;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Education = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <Text>Education</Text>
    </SafeAreaView>
  );
};

export default Education;

const styles = StyleSheet.create({});

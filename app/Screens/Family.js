import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Family = () => {
  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <Text>Family</Text>
    </View>
  );
};

export default Family;

const styles = StyleSheet.create({});

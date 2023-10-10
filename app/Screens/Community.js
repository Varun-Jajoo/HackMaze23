import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Community = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <Text>Community</Text>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({});

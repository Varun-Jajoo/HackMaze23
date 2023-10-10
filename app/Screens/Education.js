import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, Image, ScrollView } from "react-native";

const Education = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{display:"flex"}}>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Pressable style={styles.topCard}>
        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
          <Image />
          <TouchableOpacity><Text>See All</Text></TouchableOpacity>
        </View>
        <Text style={{ position: "relative", marginTop: "45%" }}>Mother and the Baby</Text>
        <Text style={{ paddingBottom: 30 }}>20 Articles</Text>
      </Pressable>
      <View style={styles.rockbottom}>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#ecf2fc",
              height: 200,
              width: 170,
              borderRadius: 20,
            }}
          >
            {/* <Image source={require("path_to_your_image")} style={{ width: 40, height: 40, margin: 10 }} /> */}
            <Text style={{ color: "darkblue", marginLeft: 10, fontWeight: "600" }}>
              Zero Balance Account
            </Text>
            <Text style={{ color: "darkblue", margin: 10, opacity: 0.5, fontSize: 12 }}>
              Open an Account with no minimum balance
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "#fcdcae",
              height: 200,
              width: 170,
              borderRadius: 20,
            }}
          >
            {/* <Image source={require("path_to_your_image")} style={{ width: 40, height: 40, margin: 10 }} /> */}
            <Text style={{ color: "brown", marginLeft: 10, fontWeight: "600" }}>
              Schema Doc Generation
            </Text>
            <Text style={{ color: "brown", margin: 10, opacity: 0.5, fontSize: 12 }}>
              Hassle-free application for eligible Yojnas
            </Text>
          </Pressable>
          <View
            style={{
              backgroundColor: "#ddffdf",
              height: 200,
              width: 170,
              borderRadius: 20,
            }}
          >
            {/* <Image source={require("path_to_your_image")} style={{ width: 40, height: 40, margin: 10 }} /> */}
            <Text style={{ color: "darkgreen", marginLeft: 10, fontWeight: "600" }}>
              Personal Saving Account
            </Text>
            <Text style={{ color: "darkgreen", margin: 10, opacity: 0.5, fontSize: 12 }}>
              Open a Savings Account online
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ddeded",
              height: 200,
              width: 170,
              borderRadius: 20,
            }}
          >
            {/* <Image source={require("path_to_your_image")} style={{ width: 40, height: 40, margin: 10 }} /> */}
            <Text style={{ marginLeft: 10, fontWeight: "600" }}>
              Bill Payments
            </Text>
            <Text style={{ margin: 10, opacity: 0.5, fontSize: 12 }}>
              Track your Due and Paid Bills
            </Text>
          </View>
        </View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Education;

const styles = StyleSheet.create({
  topCard: {
    borderRadius: 20,
    backgroundColor: "blue",
    height: "35%",
    width: "90%",
    padding: 30,
  },
  rockbottom: {
  
    height: 450,
    display: "flex",
    alignItems: "center",
  },
});

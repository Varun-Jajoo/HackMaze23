import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, Image, ScrollView, ImageBackground, Platform } from "react-native";

const Main = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ display: "flex" }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ImageBackground source={require("../assets/map.png")} style={styles.topCard}>
            <View style={styles.overlay} />
            <View style={{ display: "flex", justifyContent: "center", alignItems: "left" }}>
              <TouchableOpacity>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>Nearby Parks <Image source={require("../assets/map-location_3466163.png")} style={{ width: 40, height: 40, marginVertical: 10 }} /> </Text>
                <Text style={{ color: "white", fontWeight: 500, fontSize: 20, marginTop: 10 }}>Discover Public Parks</Text>
                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
                  Enjoy a peaceful walk amidst nature's beauty.
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
                  backgroundColor: "#02cfee",
                  height: 200,
                  width: 170,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image source={require("../assets/exercise.png")} style={{ width: 100, height: 100, marginTop: 20 }} />
                <Text style={{ color: "darkblue", marginLeft: 10, fontWeight: "600" }}>
                  Outdoor Fitness
                </Text>
                <Text style={{ color: "darkblue", margin: 10, fontSize: 13 }}>
                  Stay fit and active with outdoor exercise.
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#f67ea9",
                  height: 200,
                  width: 170,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image source={require("../assets/medicine.png")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ color: "maroon", marginLeft: 10, fontWeight: "600" }}>
                  Health and Wellness
                </Text>
                <Text style={{ color: "maroon", margin: 10, fontSize: 13 }}>
                  Access healthcare services and resources.
                </Text>
              </Pressable>
              <View
                style={{
                  backgroundColor: "#53dab8",
                  height: 200,
                  width: 170,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image source={require("../assets/problem.png")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ color: "darkgreen", fontWeight: "600" }}>
                  Problems
                </Text>
                <Text style={{ color: "darkgreen", margin: 10, fontSize: 13 }}>
                  Step by Step Solution to all your Problems
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#f0a540",
                  height: 200,
                  width: 170,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image source={require("../assets/family.png")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Family
                </Text>
                <Text style={{ margin: 10, opacity: 0.5, fontSize: 13 }}>
                  Enjoy special and Guardian reminders.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  topCard: {
    borderRadius: 40,
    resizeMode: "contain",
    height: 300,
    width: "100%",
    padding: 30,
    overflow: "hidden"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  rockbottom: {
    height: 450,
    display: "flex",
    alignItems: "center",
  },
});

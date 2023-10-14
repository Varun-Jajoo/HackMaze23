import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";


export default function FamilyMain() {
  const navigation = useNavigation();
  return (
    <>
    <Header />
    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:10, paddingHorizontal:20 }}>
      <ImageBackground source={require("../assets/fam.png")} style={styles.topCard}>
        <View style={styles.overlay} />
        <View style={{ display: "flex", justifyContent: "center", alignItems: "left" }}>
          <TouchableOpacity>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>Guardian</Text>
            <Text style={{ color: "white", fontWeight: 500, fontSize: 20, marginTop: 10 }}>Know What Your Gaurdian wants to Highlight</Text>
            <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
              Ensuring your safety and well-being.
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      

      <ImageBackground source={require("../assets/memories.png")} style={styles.topCard} >
        <View style={styles.overlay} />
        <View style={{ display: "flex", justifyContent: "center", alignItems: "left" }}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("memories")
          }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>Memories</Text>
            <Text style={{ color: "white", fontWeight: 500, fontSize: 20, marginTop: 10 }}>Relive Beautiful Moments</Text>
            <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
              Cherish special memories with loved ones.
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
     
    </View>
            </>
  );
}

const styles = StyleSheet.create({
  topCard: {
    borderRadius: 40,
    resizeMode: "cover",
   height:250,
    padding: 30,
    marginTop: 40,
    overflow: "hidden"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  }
});

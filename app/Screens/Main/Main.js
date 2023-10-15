import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, Image, ScrollView, ImageBackground, Platform } from "react-native";
import { useUserContext } from "../../UserContext";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useLocationContext } from "../../LocationContext";
import * as Speech from 'expo-speech'; // Import the Speech module

const Main = () => {
  const { setLocation, location } = useLocationContext();
  const [errorMsg, setErrorMsg] = useState(null);
  console.log(location);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const cardData = [
    { id: 1, title: "Exercise", image: require("../../assets/exercise.png"), backgroundColor: "#02cfee", to: '' },
    { id: 2, title: "Medicine", image: require("../../assets/medicine.png"), backgroundColor: "#f67ea9", to: 'Med' },
    { id: 3, title: "Problems", image: require("../../assets/problem.png"), backgroundColor: "#53dab8", to: 'problems' },
    { id: 4, title: "Family", image: require("../../assets/family.png"), backgroundColor: "#f0a540", to: 'family' },
    { id: 5, title: "Parks Nearby", image: require("../../assets/forest.png"), backgroundColor: "#02cfee", to: 'Map' },
    { id: 6, title: "Doctor", image: require("../../assets/doctor.png"), backgroundColor: "#02cfee", to: 'Doc' },
  ];

  const navigation = useNavigation();

  const { user } = useUserContext();

  const speakName = (name) => {
    Speech.speak(name, {
      language: 'en',
    });
  };

 const HandleClick=()=>{
 navigation.navigate("Profile")
 }
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ display: "flex" }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* <Text className="mt-7 ml-6 font-normal text-[32px] mb-0 py-0"> */}
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <Text style={{padding:25,backgroundColor:"#53dab8",fontSize:25,marginRight:10,borderRadius:30,fontWeight:"bold"}}>
            <Image source={require('../../assets/wave.png')} style={{height:29,width:29,paddingRight:20}}/>
          <Text>{"  "}</Text>
            Welcome, {user?.data?.first_name ? user?.data?.first_name + "!" : "User!"}
          </Text>
          <Pressable style={{height:90,width:90,backgroundColor:"#53dab8",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:30}} onPress={HandleClick}>
          <Image source={require('../../assets/avatar/dadiji-removebg-preview.png')} style={{height:60,width:60,borderRadius:50,backgroundColor:"#1c455b"}}/>
          </Pressable>
          </View>
          <View style={styles.rockbottom}>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                flexDirection: "row",
                marginTop: 0,
                justifyContent: "center"
              }}
            >
              {cardData.map((card) => (
                <View key={card.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Pressable
                    style={{
                      backgroundColor: card.backgroundColor,
                      height: 200,
                      width: 170,
                      borderRadius: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() => {
                      navigation.navigate(card.to);
                      speakName(card.title); // Speak the name when the view is clicked
                    }}
                  >
                    <Image source={card.image} style={{ width: 100, height: 100, marginTop: 20 }} />
                    <Text style={{ color: "black", marginLeft: 10, fontWeight: "600" }}>
                      {card.title}
                    </Text>
                  </Pressable>
                </View>
              ))}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, Image, ScrollView, ImageBackground, Platform } from "react-native";
import { useUserContext } from "../../UserContext";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useLocationContext } from "../../LocationContext";

const Main = () => {
  const {setLocation, location} = useLocationContext();
  const [errorMsg, setErrorMsg] = useState(null);
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
    { id: 1, title: "Exercise", image: require("../../assets/exercise.png"), backgroundColor:"#02cfee",to:''},
    { id: 2, title: "Medicine", image: require("../../assets/medicine.png"),backgroundColor:"#f67ea9",to:''  },
    { id: 3, title: "Problems", image: require("../../assets/problem.png"),backgroundColor:"#53dab8",to:'problems'  },
    { id: 4, title: "Family", image: require("../../assets/family.png"),backgroundColor:"#f0a540",to:'family'  },
    { id: 5, title: "Parks Nearby", image: require("../../assets/family.png"),backgroundColor:"#02cfee",to:'Map'  },
    { id: 6, title: "Doctor", image: require("../../assets/family.png"),backgroundColor:"#02cfee",to:''  },
  ]
  const navigation = useNavigation();

  const {user} = useUserContext();
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ display: "flex" }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text className="mt-7 ml-6 font-normal text-[32px] mb-0 py-0">
          Welcome, {user?.data?.first_name?user?.data?.first_name+"!":"User!"}
        </Text>
        
          {/* <ImageBackground source={require("../../assets/map.png")} style={styles.topCard}>
            <View style={styles.overlay} />
            <View style={{ display: "flex", justifyContent: "center", alignItems: "left" }}>
              <TouchableOpacity>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 60 }}>Nearby Parks <Image source={require("../../assets/map-location_3466163.png")} style={{ width: 40, height: 40, marginVertical: 10 }} /> </Text>
                <Text style={{ color: "white", fontWeight: 500, fontSize: 20, marginTop: 10 }}>Discover Public Parks</Text>
                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
                  Enjoy a peaceful walk amidst nature's beauty.
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground> */}
          <View style={styles.rockbottom}>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                flexDirection: "row",
                marginTop: 0,
                justifyContent:"center"
              }}
            >
              {cardData.map((card) => (
                <View key={card.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
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
                    onPress={()=>{
                      navigation.navigate(card.to)
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  
});

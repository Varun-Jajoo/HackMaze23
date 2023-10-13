import { StyleSheet, Text, View, SafeAreaView, ScrollView ,Image, Pressable, TouchableOpacity} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OnboardingTwo = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Login");
  }

  return (
   <SafeAreaView>
    <ScrollView>
      <View style={{marginTop:"10%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/avatar/logo.png')} style={{height:60,width:140,borderRadius:20,resizeMode:"contain",marginBottom:"10%"}} />
      <Text style={{backgroundColor:"#2b8380",color:"white",padding:20,borderRadius:20,fontSize:16}}> Choose your Helper</Text>
      </View> 
      <View style={{ flexDirection: 'row', flex: 1,paddingHorizontal:25,gap:50 }}>
  <View style={{ flex: 1, alignItems: 'center',margin:10}}>
    <Image source={require('../assets/avatar/dadaji-removebg-preview.png')} style={{ height: 200, width: 180, resizeMode: 'cover',backgroundColor:"#1c455b",borderRadius:20,margin:10}} />
    <Image source={require('../assets/avatar/uncle-removebg-preview.png')} style={{ height: 200, width: 180,backgroundColor:"#fcba4f",borderRadius:20 ,margin:10}} />
  </View>
  <View style={{ flex: 1, alignItems: 'center',margin:10 }}>
    <Image source={require('../assets/avatar/dadiji-removebg-preview.png')} style={{ height: 200, width: 180 ,borderRadius:20, backgroundColor:"#1c455b",margin:10}} />
    <Image source={require('../assets/avatar/lady-removebg-preview.png')} style={{ height: 200, width:180 ,backgroundColor:"#fcba4f",borderRadius:20,margin:10}} />
  </View>

</View>
<View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity style={{width:230,display:"flex",justifyContent:"center",alignItems:"center"}} onPress={handleNavigation}><Text style={{backgroundColor:"#2b8380",color:"white",padding:20,borderRadius:20,fontSize:16}}> Confirm </Text></TouchableOpacity>
</View>


    </ScrollView>
   </SafeAreaView>
  );
};

export default OnboardingTwo;

const styles = StyleSheet.create({});

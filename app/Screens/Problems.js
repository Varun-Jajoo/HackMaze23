import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, ScrollView, SafeAreaView } from "react-native";

const Education = () => {
  const [searchText, setSearchText] = useState("");

  const viewsData = [
    { id: 1, title: "Back Pain", image: require("../assets/education/back-pain_5399571.png") },
    { id: 2, title: "Nutritious Diet", image: require("../assets/education/diet_706195.png") },
    { id: 3, title: "Ear Problems", image: require("../assets/education/ear_6830649.png") },
    { id: 4, title: "Family Management", image: require("../assets/education/grandparents_2173796.png") },
    { id: 5, title: "Blurry Vision", image: require("../assets/education/red-eye_9352084.png") },
    { id: 6, title: "Healthy Heart", image: require("../assets/education/better-health_10605926.png") },
  ];

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <View style={[styles.container, {backgroundColor:"white"}]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <ScrollView style={styles.viewsContainer}>
          <View style={styles.row}>
            {viewsData.map((view) => (
              <View key={view.id} style={styles.view}>
                <Image source={view.image} style={styles.image} />
                <Text style={styles.title}>{view.title}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Education;

const styles = StyleSheet.create({
  container: {
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
  },
  searchInput: {
    marginVertical:"10%",
    padding: 10,
    width:"80%",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius:20,
    elevation:50,
    
  },
  viewsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
   
    justifyContent: "space-around",
  },
  view: {
    width: "45%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor:"#fcba4f",
    borderRadius: 15,
    padding: 10,
    elevation:20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});

import { StyleSheet, Text, View, SafeAreaView, ScrollView ,Image, Pressable, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OnboardingFont = () => {
    const [selectedFontSize, setSelectedFontSize] = useState(10);

    const commonButtonStyle = {
        height: 140,
        width: 140,
        borderWidth: 10,
        borderRadius: 99,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };
   
      
      const FontSizeOptions = [
        { borderColor: "orange", fontSize: 10 },
        { borderColor: "green", fontSize: 12 },
        { borderColor: "purple", fontSize: 14 },
        { borderColor: "pink", fontSize: 16 },
      ];
  const navigation = useNavigation();

  const handleFontSizeSelection = (fontSize) => {
    navigation.navigate("ob2");
  }

  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.shadowContainer2}>
        {FontSizeOptions.map((item, index) => (
          <Pressable
            onPress={() => handleFontSizeSelection(item.fontSize)}
            key={index}
          >
            <View
              style={{
                height: 80,
                width: 80,
                borderWidth: 7,
                borderRadius: 20,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderColor: item.borderColor,
                backgroundColor:
                  selectedFontSize === item.fontSize ? "lightgreen" : "white",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: selectedFontSize === item.fontSize ? "black" : "gray",
                }}
              >
                A
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
   </SafeAreaView>
  );
};

export default OnboardingFont;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f3f3",
    },
    selectLanguageContainer: {
      width: 300,
      height: 50,
      backgroundColor: "#b7d9e2",
      borderRadius: 20,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      marginTop: 20,
    },
    selectLanguageText: {
      fontWeight: "bold",
      fontSize: 20,
    },
    shadowContainer: {
      width: 350,
      height: 420,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 30,
      justifyContent: "center",
      alignItems: "center",
      ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    shadowContainer2: {
      ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
      width: 350,
      height: 100,
      backgroundColor: "white",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    languageText: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 10,
    },
  });

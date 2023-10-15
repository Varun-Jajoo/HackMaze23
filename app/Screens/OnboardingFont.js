import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const commonButtonStyle = {
  height: 140,
  width: 140,
  borderWidth: 7,
  borderRadius: 20,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const FontSizeOptions = [
  { borderColor: "orange", fontSize: 20 },
  { borderColor: "green", fontSize: 28 },
  { borderColor: "purple", fontSize: 36 },
  { borderColor: "pink", fontSize: 48 },
];

const OnboardingFont = () => {
  const [selectedFontSize, setSelectedFontSize] = useState(20);
  const navigation = useNavigation();

  const handleFontSizeSelection = (fontSize) => {
    setSelectedFontSize(fontSize);
  };

  const handleNavigation = () => {
    navigation.navigate("ob2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <Text style={styles.selectLanguageText}>Select a font size</Text>
      </View>
      <View style={styles.shadowContainer}>
      
        {FontSizeOptions.map((item, index) => (
          <Pressable
            onPress={() => handleFontSizeSelection(item.fontSize)}
            key={index}
          >
            <View
              style={{
                ...commonButtonStyle,
                borderColor: item.borderColor,
                backgroundColor:
                  selectedFontSize === item.fontSize ? "lightgreen" : "white",
              }}
            >
              <Text
                style={{
                  fontSize: item.fontSize,
                  color: selectedFontSize === item.fontSize ? "black" : "gray",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  textAlign: "center", // Center text
                }}
              >
                ABc
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{ width: 230, display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }} onPress={handleNavigation}>
          <Text style={{ backgroundColor: "#2b8380", color: "white", padding: 20, borderRadius: 20, fontSize: 16 }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'green', 
  },
  shadowContainer: {
    width: 350,
    height: 350,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    position:"relative",
    display:"flex",
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
});

export default OnboardingFont;

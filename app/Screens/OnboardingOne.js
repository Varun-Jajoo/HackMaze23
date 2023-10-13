import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const commonButtonStyle = {
  height: 140,
  width: 140,
  borderWidth: 10,
  borderRadius: 99,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const languageData = [
  {
    text: "Aa",
    borderColor: "orange",
    language: "English",
  },
  {
    text: "आ",
    borderColor: "green",
    language: "हिंदी",
  },
  {
    text: "ગુ",
    borderColor: "purple",
    language: "ગુજરાતી",
  },
  {
    text: "తె",
    borderColor: "pink",
    language: "తెలుగు",
  },
];

const FontSizeOptions = [
  { borderColor: "orange", fontSize: 10 },
  { borderColor: "green", fontSize: 12 },
  { borderColor: "purple", fontSize: 14 },
  { borderColor: "pink", fontSize: 16 },
];

const OnboardingOne = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedFontSize, setSelectedFontSize] = useState(10);
  const navigation = useNavigation();
  const scaleAnimation = new Animated.Value(1);
  const colorAnimation = new Animated.Value(0);

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    // navigation.navigate("ob2");
  };

  const handleFontSizeSelection = (fontSize) => {
    setSelectedFontSize(fontSize);
    // Add animation logic here
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
    navigation.navigate("Login");
  };

  const buttonColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "lightgreen"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <Text style={styles.selectLanguageText}>Select a language</Text>
      </View>
      <View style={styles.shadowContainer}>
        {languageData.map((item, index) => (
          <Pressable
            onPress={() => handleLanguageSelection(item.language)}
            key={index}
          >
            <Animated.View
              style={{
                ...commonButtonStyle,
                borderColor: item.borderColor,
                backgroundColor:
                  selectedLanguage === item.language ? buttonColor : "white",
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  color: selectedLanguage === item.language ? "black" : "gray",
                }}
              >
                {item.text}
              </Text>
            </Animated.View>
            <Text style={styles.languageText}>{item.language}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.selectLanguageContainer}>
        <Text style={styles.selectLanguageText}>Select a Font Size</Text>
      </View>
      <View style={styles.shadowContainer2}>
        {FontSizeOptions.map((item, index) => (
          <Pressable
            onPress={() => handleFontSizeSelection(item.fontSize)}
            key={index}
          >
            <Animated.View
              style={[
                {
                  height: 80,
                  width: 80,
                  borderWidth: 7,
                  borderRadius: 20,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: item.borderColor,
                  backgroundColor:
                    selectedFontSize === item.fontSize ? buttonColor : "white",
                },
                {
                  transform: [{ scale: scaleAnimation }],
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: selectedFontSize === item.fontSize ? "black" : "gray",
                }}
              >
                A
              </Text>
            </Animated.View>
          </Pressable>
        ))}
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

export default OnboardingOne;

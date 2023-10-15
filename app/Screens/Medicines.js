import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";

const Medicines = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardColorIndex, setCardColorIndex] = useState(0);

  const cardColors = [
    { backgroundColor: "white", textColor: "black" },
    { backgroundColor: "dodgerblue", textColor: "white" },
    { backgroundColor: "pink", textColor: "purple" },
    { backgroundColor: "lightgreen", textColor: "darkgreen" },
  ];

  const elderlyMedicineDetails = [
    {
      title: "Medicine A",
      disease: "High Blood Pressure",
      time: "After Breakfast",
      description: "This medicine helps manage high blood pressure and should be taken after breakfast.",
    },
    {
      title: "Medicine B",
      disease: "Arthritis",
      time: "Before Dinner",
      description: "Medicine for arthritis that should be taken before dinner for optimal results.",
    },
    {
      title: "Medicine C",
      disease: "Diabetes",
      time: "After Lunch",
      description: "For diabetes management, take this medicine after having your lunch.",
    },
    {
      title: "Medicine D",
      disease: "Heart Disease",
      time: "Before Bedtime",
      description: "This medicine helps in the treatment of heart diseases. Take it before bedtime.",
    },
  ];
  const cards = [...elderlyMedicineDetails];

  const handleNext = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
      // Increment the card color index by 1.
      setCardColorIndex((cardColorIndex + 1) % cardColors.length);
    }
  };

  const handlePrevious = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      // Decrement the card color index by 1.
      setCardColorIndex((cardColorIndex - 1 + cardColors.length) % cardColors.length);
    }
  };

  const currentCardStyle = cardColors[cardColorIndex];

  return (
    <SafeAreaView>
      <Header/>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 800,
        }}
      >
        <View
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 230,
            width: 280,
          }}
        >
          <View
            style={{
              display: "flex",
              backgroundColor: currentCardStyle.backgroundColor,
              justifyContent: "center",
              alignItems: "center",
              height: 230,
              width: 280,
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 30,
              zIndex: 99,
              top: 0,
              position: "absolute",
            }}
          >
            <Text style={{ color: currentCardStyle.textColor, fontSize: 25, }}>
              {cards[cardIndex].title}
            </Text>
            <View style={{ display: "flex",justifyContent: "center",
              alignItems: "left",}}>
            <Text style={{ color: currentCardStyle.textColor,marginHorizontal: 20 }}>
              Disease: {cards[cardIndex].disease}
            </Text>
            <Text style={{ color: currentCardStyle.textColor,  marginHorizontal: 20 }}>
              Time: {cards[cardIndex].time}
            </Text>
            <Text style={{ color: currentCardStyle.textColor, marginHorizontal: 20 }}>
              Description: {cards[cardIndex].description}
            </Text>
            </View>
          </View>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={{
                display: "flex",
                backgroundColor: cardColors[(cardColorIndex + index + 1) % cardColors.length].backgroundColor,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                height: 230,
                width: 280,
                borderWidth: 2,
                borderColor: cardColors[(cardColorIndex + index + 1) % cardColors.length].backgroundColor,
                borderRadius: 30,
                zIndex: 9 - index,
                top: (index + 1) * 30,
              }}
            />
          ))}
        </View>
        
        {/* <TouchableOpacity
          style={styles.button}
          onPress={handlePrevious}
          disabled={cardIndex === 0}
        >
          <Text style={{color:'white',fontSize:25}}>Previously Taken</Text>
        </TouchableOpacity> */}
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          disabled={cardIndex === cards.length - 1}
        >
          <Text style={{color:'black',fontSize:25,fontWeight:"bold"}}>Medicine Taken</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 120,
    padding: 20,
    backgroundColor: "#fcba4f",
    borderRadius: 15,
    color:'white'
  },
  button1: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    color:"white"
  },
});

export default Medicines;



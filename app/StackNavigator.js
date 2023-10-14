import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Community from "./Screens/Community";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Screens/Profile";
import You from "./Screens/You";
import Education from "./Screens/Education";
import Family from "./Screens/Family";
import Memories from "./Screens/Memories";
import LoginScreen from "./Screens/Login";
import SplashScreen from "./Screens/SplashScreen";
import OnboardingOne from "./Screens/OnboardingOne";
import OnboardingTwo from "./Screens/OnboardingTwo";
import OnboardingFont from "./Screens/OnboardingFont";
import Main from "./Screens/Main/Main";
import Medicines from "./Screens/Medicines";
import Maps from './Screens/Maps';
import Problems from './Screens/Problems'
import FamilyMain from './Screens/FamilyMain'
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#e32f45",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        
        
        <Tab.Screen
          name="Education"
          component={Main}
          options={{
            tabBarLabel: "Education",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/splash.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "white" : "white",
                }}
              />
            ),
            tabBarButton: (props) => (
              // Return the CustomTabBarButton component
              <CustomTabBarButton {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Voice"
          component={Main}
          options={{
            tabBarLabel: "Education",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/splash.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "white" : "white",
                }}
              />
            ),
            tabBarButton: (props) => (
              // Return the CustomTabBarButton component
              <CustomTabBarButton {...props} />
            ),
          }}
        />
        
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ob1"
          component={OnboardingOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="obfont"
          component={OnboardingFont}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ob2"
          component={OnboardingTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Med"
          component={Medicines}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="problems"
          component={Problems}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="family"
          component={FamilyMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Maps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="memories"
          component={Memories}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

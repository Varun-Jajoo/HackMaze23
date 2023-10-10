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
import LoginScreen from "./Screens/Login";
import Memories from "./Screens/Memories";
import Home from "./Screens/Home";

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
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/splash.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Schemes
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="You"
          component={You}
          options={{
            tabBarLabel: "You",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/splash.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Tracker
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Education"
          component={Education}
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
          name="Community"
          component={Community}
          options={{
            tabBarLabel: "Community",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/splash.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Community
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Family"
          component={Family}
          options={{
            tabBarLabel: "Family",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/splash.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Expenses
                </Text>
              </View>
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
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

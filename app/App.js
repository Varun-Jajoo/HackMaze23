import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { UserProvider, useUserContext } from "./UserContext";
import { LocationProvider } from "./LocationContext";

export default function App() {
  
  return (
<UserProvider>
  <LocationProvider>

<StackNavigator />
  </LocationProvider>
</UserProvider>

  );
}

const styles = StyleSheet.create({});

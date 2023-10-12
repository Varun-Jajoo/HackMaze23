import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { UserProvider, useUserContext } from "./UserContext";

export default function App() {
  return (
<UserProvider>
<StackNavigator />
</UserProvider>

  );
}

const styles = StyleSheet.create({});

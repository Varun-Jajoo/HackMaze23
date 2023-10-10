import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StackNavigator />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});

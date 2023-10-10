import { StatusBar } from "expo-status-bar";
import { createContext, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

export const UserContext = createContext(null);

export default function App() {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StackNavigator />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});

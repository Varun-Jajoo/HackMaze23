import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useUserContext } from "../UserContext";

const LoginScreen = () => {
  const { setUser } = useUserContext();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("signIn");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [email, setSignUpEmail] = useState("");
  const [password, setSignUpPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleLogin = async () => {
    let headersList = {
      Accept: "/",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=om@gmail.com&password=1234`;

    let reqOptions = {
      url: "https://log-b.vercel.app/api/signin/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    try {
      let response = await axios.request(reqOptions);
      // console.log(response.data);
      if (response.status === 200) {
        setUser({ id: response.data.user.id, data: {} });
        navigation.replace("Main");
      } else {
        console.error("Response Status Code:", response.status);
        Alert.alert("Error user already exists");
      }
    } catch (error) {
      console.error("Error2:", error);
    }
  };

  const handleRegister = async () => {
    let headersList = {
      Accept: "/",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `password=${password}&email=${email}&name=${firstName}`;

    let reqOptions = {
      url: "https://log-b.vercel.app/api/signup/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    try {
      let response = await axios.request(reqOptions);
      console.log(response.data);
      if (response.status === 200) {
        setUser(response.data.user.id);
        console.log(response.data.user.id);
        navigation.replace("Main");
      } else {
        console.error("Response Status Code:", response.status);
        Alert.alert("Error user already exists");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: 600,
            paddingTop: 40,
          }}
        >
          Sishu
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 55,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Pressable
              onPress={() => setSelectedTab("signIn")}
              style={{
                bborderBottomColor:
                  selectedTab === "signIn" ? "black" : "transparent",
                borderBottomWidth: selectedTab === "signIn" ? 1 : 0,
                paddingBottom: 15,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Sign in</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Pressable
              onPress={() => setSelectedTab("signUp")}
              style={{
                bborderBottomColor:
                  selectedTab === "signUp" ? "black" : "transparent",
                borderBottomWidth: selectedTab === "signUp" ? 1 : 0,
                paddingBottom: 15,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
        {selectedTab === "signIn" ? (
          <View style={{ marginHorizontal: 20, paddingTop: 20 }}>
            <TextInput
              placeholder="Email"
              value={logInEmail}
              onChangeText={(text) => setLogInEmail(text)}
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                paddingBottom: 10,
                paddingTop: 40,
              }}
            />
            <TextInput
              placeholder="Password"
              value={logInPassword}
              secureTextEntry={true}
              onChangeText={(text) => setLogInPassword(text)}
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                paddingBottom: 10,
                paddingTop: 50,
              }}
            />
          </View>
        ) : (
          <View style={{ marginHorizontal: 20, paddingTop: 20 }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setSignUpEmail(text)}
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                paddingBottom: 10,
                paddingTop: 40,
              }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setSignUpPassword(text)}
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                paddingBottom: 10,
                paddingTop: 50,
              }}
            />
            <TextInput
              placeholder="Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                paddingBottom: 10,
                paddingTop: 40,
              }}
            />
          </View>
        )}
        <Text
          style={{
            textAlign: "right",
            margin: 15,
            fontSize: 12,
            color: "#3366CC",
          }}
        >
          {selectedTab === "signIn" && "Forgot Password?"}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <Pressable
            onPress={selectedTab === "signUp" ? handleRegister : handleLogin}
            style={{
              backgroundColor: "#0080ff",
              width: 350,
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>
              {selectedTab === "signIn" ? "Sign In" : "Sign Up"}
            </Text>
          </Pressable>
        </View>
        <Text
          style={{
            marginTop: 80,
            color: "black",
            textAlign: "center",
            color: "gray",
          }}
        >
          or {selectedTab === "signIn" ? "Sign In" : "Sign Up"} with
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 50,
            justifyContent: "space-evenly",
            marginHorizontal: 30,
          }}
        >
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
            }}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

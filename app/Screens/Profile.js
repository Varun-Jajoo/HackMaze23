import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useUserContext } from "../UserContext";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useUserContext();
  console.log("data" + user.id,user.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let headersList = {
          Accept: "/",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/x-www-form-urlencoded",
        };

        // let bodyContent = `user_id=${user}`;
        let reqOptions = {
          url: `https://log-b.vercel.app/api/user-data/?user_id=${user.id}`,
          method: "GET",
          headers: headersList,
          // data: bodyContent,
        };

        let response = await axios.request(reqOptions);
        console.log(response.data);
        setUser({ ...user, data: response.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          height: "47%",
          width: "100%",
          backgroundColor: "lightgrey",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          position: "relative",
          bottom: 60,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 60,
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              borderRadius: 99,
              backgroundColor: "white",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>Days</Text>
            <Text>Week</Text>
          </View>
          <View
            style={{
              borderRadius: 99,
              backgroundColor: "grey",
              width: 40,
              height: 40,
            }}
          ></View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <AnimatedCircularProgress
            size={160}
            rotation={0}
            width={15}
            fill={70}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
        </View>
      </View>
      <View
        style={{
          height: "60%",
          width: "100%",
          backgroundColor: "white",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

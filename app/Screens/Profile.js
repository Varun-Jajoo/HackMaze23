import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useUserContext } from "../UserContext";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useUserContext();
  console.log("data" + user.id, user.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let headersList = {
          Accept: "/",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/x-www-form-urlencoded",
        };
        let reqOptions = {
          // url: `https://log-b.vercel.app/api/user-data/?user_id=${user.id}`,
          url: `https://log-b.vercel.app/api/user-data/?user_id=${5}`,
          method: "GET",
          headers: headersList,
        };

        let response = await axios.request(reqOptions);
        console.log(response.data);
        setUser({ ...user, data: response.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetchData();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: "47%",
            width: "100%",
            backgroundColor: "#b7d9e2",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            position: "relative",
            bottom: 60,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 70,
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
                backgroundColor: "#5c93aa",
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
              tintColor="#5c93aa"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#f0fcfe"
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            position: "relative",
            top: -40,
            paddingHorizontal: 10,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 110,
                backgroundColor: "lightblue",
                borderRadius: 15,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 19 }}>Water</Text>
                <Pressable
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "black",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  alignItems: "baseline",
                }}
              >
                <Text style={{ fontSize: 35 }}>1</Text>
                <Text> of 2 liters</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 110,
                backgroundColor: "pink",
                borderRadius: 15,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 19 }}>Sleep</Text>
                <Pressable
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "black",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  alignItems: "baseline",
                }}
              >
                <Text style={{ fontSize: 35 }}>6</Text>
                <Text> of 8 Hours</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            height: 230,
            backgroundColor: "#F1F1F1",
            borderRadius: 20,
            padding: 10,
            marginTop: -20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            Recommendations for you
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
                backgroundColor: "#85bcc7",
              }}
            ></View>
            <View
              style={{
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Milk</Text>
              <Text>Rich in calcium</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
                backgroundColor: "#85bcc7",
              }}
            ></View>
            <View
              style={{
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Milk</Text>
              <Text>Rich in calcium</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
                backgroundColor: "#85bcc7",
              }}
            ></View>
            <View
              style={{
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Milk</Text>
              <Text>Rich in calcium</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

import React, { useEffect, useState } from "react";
import { Box, Text, Image, FormControl, Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/profile";
import { Card } from "react-native-shadow-cards";
import { Pressable } from "react-native";
import { AsyncStorage } from "react-native";
import api from "../config/api";

export default function Profile({ navigation }) {
  const [data, setData] = useState({});
  const [activities, setActivities] = useState([]);

  const findActivities = activities.filter((data) => data.complete === "");

  const handlerLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  useEffect(() => {
    _userAuth();
  });

  const _userAuth = async () => {
    const idUser = await AsyncStorage.getItem("idUser");
    const response = await api.get("/todo/" + idUser);
    setData(response.data);
    setActivities(response.data.activities);
  };

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Box style={styles.boxProfile}>
        <Image
          source={require("../../assets/profile.png")}
          size={150}
          alt="profile"
        />
        <Text style={styles.textProfile} fontWeight="semibold">
          {data.username}
        </Text>
      </Box>
      <Text style={styles.textDescription}>
        Hello i use this todo app to schedule my activities
      </Text>
      <Text style={styles.textActivity} fontWeight="medium">
        TOTAL MY ACTIVITY
      </Text>
      <Box style={styles.boxTotalActivity}>
        <Pressable onPress={() => navigation.navigate("Activity")}>
          <Card style={styles.cardTotalActivity}>
            <Text style={styles.textTotalActivity}>
              {findActivities?.length}
            </Text>
          </Card>
        </Pressable>
      </Box>
      <Box style={styles.boxLogout}>
        <Pressable onPress={() => handlerLogout()}>
          <Card style={styles.btnLogout}>
            <Text style={styles.textLogout} fontWeight="medium">
              Logout
            </Text>
          </Card>
        </Pressable>
      </Box>
    </LinearGradient>
  );
}

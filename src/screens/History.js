import React, { useState, useEffect } from "react";
import { Box, ScrollView, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/history";
import { Ionicons } from "@expo/vector-icons";
import api from "../config/api";
import { FlatList } from "native-base";
import AppLoading from "expo-app-loading";
import { AsyncStorage } from "react-native";

export default function History() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const findActivities = data.filter((data) => data.complete !== "");

  useEffect(() => {
    _userAuth();
  });

  const _userAuth = async () => {
    const idUser = await AsyncStorage.getItem("idUser");
    const response = await api.get("/todo/" + idUser);
    if (response.data) {
      setIsLoading(true);
      setData(response.data.activities);
      console.log(response.data.activities);
    }
  };

  if (!isLoading) {
    return <AppLoading />;
  }

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Text style={styles.textTitle} fontWeight="medium">
        History Complete
      </Text>
      <ScrollView style={{ height: "80%" }}>
        <FlatList
          data={findActivities}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Box mt={10} style={styles.boxHistory}>
              <Box>
                <Text mb={2} style={styles.textHistory} fontWeight="medium">
                  {item.activity}
                </Text>
                <Text style={styles.textHistory}>{item.complete}</Text>
              </Box>
              <Ionicons name="trash" size={28} color="#5F67FF"></Ionicons>
            </Box>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
}

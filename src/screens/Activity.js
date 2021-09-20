import React, { useEffect, useState } from "react";
import { Box, Text, Pressable } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/activity";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import { ScrollView, Image } from "native-base";
import { AsyncStorage, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import api from "../config/api";

export default function Activity({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const findActivity = data.filter((data) => data.complete === "");

  AsyncStorage.getItem("token").then((response) => {
    if (!response) {
      navigation.navigate("Login");
    }
  });

  useEffect(() => {
    _activityUser();
  });

  const _activityUser = async () => {
    const idUser = await AsyncStorage.getItem("idUser");
    const response = await api.get("/todo/" + idUser);
    if (response) {
      setIsLoading(true);
      setData(response.data.activities);
    }
  };

  if (!isLoading) {
    return <AppLoading />;
  }

  const handlerDone = async (activityUser) => {
    const idUser = await AsyncStorage.getItem("idUser");
    const response = await api.put("/todo/complete/" + idUser, {
      activity: activityUser,
    });
    if (response.data) {
      alert("success");
      navigation.navigate("History");
    }
  };

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Card style={styles.btnAddTodo}>
        <Pressable onPress={() => navigation.navigate("Add Activity")}>
          <Text style={styles.textAddTodo}>+</Text>
        </Pressable>
      </Card>
      {findActivity.length === 0 ? (
        <Box style={styles.boxNoTodo}>
          <Text style={styles.textTitle} fontWeight="medium">
            No Activity
          </Text>
          <Image
            source={require("../../assets/no-todo.png")}
            alt="Alternate Text"
            size={200}
          />
        </Box>
      ) : (
        <Box>
          <Text mb={10} style={styles.textTitle} fontWeight="medium">
            Your Activity
          </Text>
          <ScrollView style={{ height: "80%" }}>
            <FlatList
              data={findActivity}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Box mb={5} style={styles.boxHistory}>
                  <Box>
                    <Text mb={2} style={styles.textHistory} fontWeight="medium">
                      {item.activity}
                    </Text>
                    <Text style={styles.textHistory}>
                      Schedule at, {item.date}, {item.time}
                    </Text>
                  </Box>
                  <Box>
                    <Pressable
                      style={styles.btnDone}
                      onPress={() => handlerDone(item.activity)}
                    >
                      <Text style={styles.textDone}>DONE</Text>
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        navigation.navigate("UpdateActivity", {
                          id: item.id,
                        })
                      }
                    >
                      <Box style={styles.btnIcon}>
                        <Ionicons
                          name="create-outline"
                          size={28}
                          color="#5F67FF"
                        ></Ionicons>
                      </Box>
                    </Pressable>
                  </Box>
                </Box>
              )}
            />
          </ScrollView>
        </Box>
      )}
    </LinearGradient>
  );
}

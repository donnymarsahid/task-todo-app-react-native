import React from "react";
import { Box, Text, Pressable } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/activity";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import { ScrollView } from "native-base";

export default function Activity({ navigation }) {
  const token = false;
  if (!token) {
    navigation.navigate("Login");
  }

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Card style={styles.btnAddTodo}>
        <Pressable onPress={() => navigation.navigate("Add Activity")}>
          <Text style={styles.textAddTodo}>+</Text>
        </Pressable>
      </Card>
      <Text mb={10} style={styles.textTitle} fontWeight="medium">
        Your Activity
      </Text>
      {/* <Box style={styles.boxNoTodo}>
        <Text style={styles.textTitle} fontWeight="medium">No Activity</Text>
        <Image
          source={require("../../assets/no-todo.png")}
          alt="Alternate Text"
          size={200}
        />
      </Box> */}
      <ScrollView>
        <Box mb={5} style={styles.boxHistory}>
          <Box>
            <Text mb={2} style={styles.textHistory} fontWeight="medium">
              Learning
            </Text>
            <Text style={styles.textHistory}>
              Schedule at sep, 19,2021, 14:01
            </Text>
          </Box>
          <Box>
            <Pressable style={styles.btnDone}>
              <Text style={styles.textDone}>DONE</Text>
            </Pressable>
            <Box style={styles.btnIcon}>
              <Ionicons
                name="create-outline"
                size={28}
                color="#5F67FF"
              ></Ionicons>
            </Box>
          </Box>
        </Box>
        <Box mb={5} style={styles.boxHistory}>
          <Box>
            <Text mb={2} style={styles.textHistory} fontWeight="medium">
              Learning
            </Text>
            <Text style={styles.textHistory}>
              Schedule at sep, 19,2021, 14:01
            </Text>
          </Box>
          <Box>
            <Pressable style={styles.btnDone}>
              <Text style={styles.textDone}>DONE</Text>
            </Pressable>
            <Box style={styles.btnIcon}>
              <Ionicons
                name="create-outline"
                size={28}
                color="#5F67FF"
              ></Ionicons>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </LinearGradient>
  );
}

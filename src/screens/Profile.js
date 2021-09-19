import React from "react";
import { Box, Text, Image, FormControl, Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/profile";
import { Card } from "react-native-shadow-cards";
import { Pressable } from "react-native";

export default function Profile({ navigation }) {
  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Box style={styles.boxProfile}>
        <Image source={require("../../assets/profile.png")} size={150} />
        <Text style={styles.textProfile} fontWeight="semibold">
          Donny Marsahid
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
            <Text style={styles.textTotalActivity}>6</Text>
          </Card>
        </Pressable>
      </Box>
    </LinearGradient>
  );
}

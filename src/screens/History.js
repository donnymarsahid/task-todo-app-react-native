import * as React from "react";
import { Box, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/history";
import { Ionicons } from "@expo/vector-icons";

export default function History() {
  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Text style={styles.textTitle} fontWeight="medium">
        History Complete
      </Text>
      <Box mt={10} style={styles.boxHistory}>
        <Box>
          <Text mb={2} style={styles.textHistory} fontWeight="medium">
            Learning
          </Text>
          <Text style={styles.textHistory}>September 19,02,2021 16:00AM</Text>
        </Box>
        <Ionicons name="trash" size={28} color="#5F67FF"></Ionicons>
      </Box>
    </LinearGradient>
  );
}

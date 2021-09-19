import React from "react";
import styles from "./style/register";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text, FormControl, Input, Pressable } from "native-base";

export default function Register({ navigation }) {
  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Text style={styles.textTitle} fontWeight="semibold">
        TODO APP
      </Text>
      <Text style={styles.textTagLine}>
        Be a human who doesn't forget to record his activities
      </Text>
      <Box style={styles.boxLogin}>
        <Text style={styles.textLogin} color="primary.50" fontWeight="medium">
          REGISTER
        </Text>
        <FormControl mt={6}>
          <FormControl.Label _text={{ color: "#5F67FF", fontSize: 16 }}>
            Username :
          </FormControl.Label>
          <Box style={styles.boxInput}>
            <Input color="primary.50" placeholder="enter username" />
          </Box>
        </FormControl>
        <FormControl mt={5}>
          <FormControl.Label _text={{ color: "#5F67FF", fontSize: 16 }}>
            Password :
          </FormControl.Label>
          <Box style={styles.boxInput}>
            <Input
              type="password"
              color="primary.50"
              placeholder="enter password"
            />
          </Box>
        </FormControl>
        <FormControl mt={5}>
          <FormControl.Label _text={{ color: "#5F67FF", fontSize: 16 }}>
            Confirm Password :
          </FormControl.Label>
          <Box style={styles.boxInput}>
            <Input
              type="password"
              color="primary.50"
              placeholder="enter confirm password"
            />
          </Box>
        </FormControl>
        <Pressable bg="primary.50" style={styles.btnLogin}>
          <Text style={styles.textBtnLogin}>REGISTER</Text>
        </Pressable>
        <Box style={styles.boxQuestion} mt={5}>
          <Text style={styles.textQuestion}>Have Account ? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.textQuestion, styles.textQuestionUnderline]}>
              Login
            </Text>
          </Pressable>
        </Box>
      </Box>
    </LinearGradient>
  );
}

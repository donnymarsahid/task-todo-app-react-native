import React, { useState } from "react";
import styles from "./style/register";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text, FormControl, Input, Pressable } from "native-base";
import api from "../config/api";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [confirmPassword, setConfirmPasssword] = useState("");
  const [message, setMessage] = useState("");

  const handlerSubmit = () => {
    if (username === "" || password === "") {
      setMessage("Enter username / password !");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return false;
    }
    if (password !== confirmPassword) {
      setMessage("Password does match !");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return false;
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    api
      .post("/register", formData)
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Text style={styles.textWarning}>{message}</Text>
        <FormControl mt={2}>
          <FormControl.Label _text={{ color: "#5F67FF", fontSize: 16 }}>
            Username :
          </FormControl.Label>
          <Box style={styles.boxInput}>
            <Input
              color="primary.50"
              placeholder="enter username"
              onChangeText={(text) => setUsername(text)}
            />
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
              onChangeText={(text) => setPasssword(text)}
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
              onChangeText={(text) => setConfirmPasssword(text)}
            />
          </Box>
        </FormControl>
        <Pressable
          onPress={() => handlerSubmit()}
          bg="primary.50"
          style={styles.btnLogin}
        >
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

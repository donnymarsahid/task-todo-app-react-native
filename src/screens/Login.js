import React, { useState } from "react";
import styles from "./style/login";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text, FormControl, Input, Pressable } from "native-base";
import api from "./config/api";
import axios from "axios";

export default function Login({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handlerSubmit = () => {
    const body = JSON.stringify({
      username: username,
      password: password,
    });

    axios
      .post("https://todo-app-portfolio-donny.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setMessage(res.data.message);
          setTimeout(() => {
            setMessage("");
          }, 3000);
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
          LOGIN
        </Text>
        <Text color="red" style={styles.textDanger}>
          {message}
        </Text>
        <FormControl mt={2}>
          <FormControl.Label _text={{ color: "#5F67FF", fontSize: 16 }}>
            Username :
          </FormControl.Label>
          <Box style={styles.boxInput}>
            <Input
              color="primary.50"
              placeholder="enter your username"
              onChangeText={(text) => setUserName(text)}
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
              placeholder="enter your password"
              onChangeText={(text) => setPassword(text)}
            />
          </Box>
        </FormControl>
        <Pressable
          bg="primary.50"
          style={styles.btnLogin}
          onPress={() => handlerSubmit()}
        >
          <Text style={styles.textBtnLogin}>LOGIN</Text>
        </Pressable>
        <Box style={styles.boxQuestion} mt={5}>
          <Text style={styles.textQuestion}>No Have Account ? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={[styles.textQuestion, styles.textQuestionUnderline]}>
              Register
            </Text>
          </Pressable>
        </Box>
      </Box>
    </LinearGradient>
  );
}

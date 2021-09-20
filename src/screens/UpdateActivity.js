import React, { useEffect, useState } from "react";
import { Box, Text, FormControl, Input, Pressable } from "native-base";
import { AsyncStorage, Platform } from "react-native";
import styles from "./style/addActivity";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import api from "../config/api";

export default function UpdateActivity({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState("mm-dd-yyyy");
  const [textTime, setTextTime] = useState("00:00");
  const [activity, setActivity] = useState("");
  const [message, setMessage] = useState("");

  const [activities, setActivities] = useState([]);

  //   const findUpdateActivity = activities.find(data => data.id === id)

  useEffect(() => {
    _updateActivity();
  }, []);

  const _updateActivity = async () => {
    const idUser = await AsyncStorage.getItem("idUser");
    const response = await api.get("/todo/" + idUser);
    console.log(route.params.id);
    console.log(response.data.activities);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    if (mode === "date") {
      let fDate =
        tempDate.getDate() +
        "-" +
        (tempDate.getMonth() + 1) +
        "-" +
        tempDate.getFullYear();
      setTextDate(fDate);
    } else {
      let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
      setTextTime(fTime);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handlerSubmit = async () => {
    alert("ok");
  };

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Text style={styles.textTitle} fontWeight="medium">
        Update Activity
      </Text>
      <Text mt={5} style={styles.textWarning}>
        {message}
      </Text>
      <FormControl mt={5}>
        <FormControl.Label _text={{ color: "white", fontSize: 18 }}>
          Activity :
        </FormControl.Label>
        <Box style={styles.boxInput}>
          <Input
            color="primary.50"
            placeholder="enter your activity"
            onChangeText={(text) => setActivity(text)}
          />
        </Box>
      </FormControl>
      <FormControl.Label mt={5} _text={{ color: "white", fontSize: 18 }}>
        Date :
      </FormControl.Label>
      <Pressable
        style={styles.formDateTime}
        title="Date"
        onPress={() => showMode("date")}
      >
        <Text color="primary.50" style={styles.textDateTime}>
          {textDate}
        </Text>
        <Ionicons name="calendar-outline" size={28} color="#5F67FF"></Ionicons>
      </Pressable>
      <FormControl.Label mt={5} _text={{ color: "white", fontSize: 18 }}>
        Time :
      </FormControl.Label>
      <Pressable
        style={styles.formDateTime}
        title="Time"
        onPress={() => showMode("time")}
      >
        <Text color="primary.50" style={styles.textDateTime}>
          {textTime}
        </Text>
        <Ionicons name="time-outline" size={28} color="#5F67FF"></Ionicons>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Pressable
        mt={10}
        bg="primary.50"
        style={styles.btnAddActivity}
        onPress={() => handlerSubmit()}
      >
        <Text style={styles.textAddActivity}>Update Activity</Text>
      </Pressable>
      <Pressable
        mt={10}
        onPress={() => navigation.navigate("Activity")}
        style={styles.btnGoBack}
      >
        <Text style={styles.textGoBack}>Go back</Text>
      </Pressable>
    </LinearGradient>
  );
}

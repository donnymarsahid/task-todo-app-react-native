import React, { useState } from "react";
import { Box, Text, FormControl, Input, Pressable, Button } from "native-base";
import { Platform } from "react-native";
import styles from "./style/addActivity";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

export default function AddActivity() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState("mm-dd-yyyy");
  const [textTime, setTextTime] = useState("00:00");

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
      setTextDate("schedule date : " + fDate);
    } else {
      let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
      setTextTime("schedule time : " + fTime);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <LinearGradient colors={["#96BAFF", "#7C83FD"]} style={styles.box}>
      <Text style={styles.textTitle}>Enter Your Activity Here</Text>
      <FormControl mt={10}>
        <FormControl.Label _text={{ color: "white", fontSize: 18 }}>
          Activity :
        </FormControl.Label>
        <Box style={styles.boxInput}>
          <Input color="primary.50" placeholder="enter your activity" />
        </Box>
      </FormControl>
      <Pressable
        mt={5}
        style={styles.formDateTime}
        title="Date"
        onPress={() => showMode("date")}
      >
        <Text color="primary.50" style={styles.textDateTime}>
          {textDate}
        </Text>
        <Ionicons name="calendar-outline" size={28} color="#5F67FF"></Ionicons>
      </Pressable>
      <Pressable
        mt={5}
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
      <Pressable mt={10} bg="primary.50" style={styles.btnAddActivity}>
        <Text style={styles.textAddActivity}>Add Activity</Text>
      </Pressable>
    </LinearGradient>
  );
}

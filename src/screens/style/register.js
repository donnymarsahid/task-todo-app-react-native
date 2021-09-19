import { StyleSheet } from "react-native";
import { height, justifyContent } from "styled-system";

export default StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    padding: 22,
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },
  textTagLine: {
    fontSize: 13,
    color: "#FFF",
    textAlign: "center",
  },
  textLogin: {
    fontSize: 26,
    textAlign: "center",
  },
  boxLogin: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 520,
    borderRadius: 8,
    marginTop: 25,
    padding: 20,
  },
  boxInput: {
    backgroundColor: "#F0F1FF",
    borderRadius: 6,
    height: 53,
  },
  btnLogin: {
    height: 55,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textBtnLogin: {
    color: "#FFF",
    fontSize: 20,
  },
  textQuestion: {
    color: "#5F67FF",
  },
  textQuestionUnderline: {
    textDecorationLine: "underline",
  },
  boxQuestion: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

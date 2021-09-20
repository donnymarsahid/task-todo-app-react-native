import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    padding: 22,
    paddingTop: 80,
  },
  textTitle: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },

  boxHistory: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHistory: {
    color: "#5F67FF",
    fontSize: 14,
  },
  btnDone: {
    backgroundColor: "#5F67FF",
    borderRadius: 3,
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textDone: {
    color: "#FFF",
    fontSize: 14,
  },
  btnIcon: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  boxNoTodo: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnAddTodo: {
    backgroundColor: "#5F67FF",
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 999,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textAddTodo: {
    color: "#FFF",
    fontSize: 60,
    paddingBottom: 25,
  },
});

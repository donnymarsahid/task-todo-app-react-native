import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    padding: 22,
  },
  textTitle: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },
  boxInput: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    height: 53,
  },
  btnAddActivity: {
    height: 58,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textAddActivity: {
    color: "#FFF",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  formDateTime: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  textDateTime: {
    paddingBottom: 6,
  },
});

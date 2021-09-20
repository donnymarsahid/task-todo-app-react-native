import { StyleSheet } from "react-native";
import { bottom } from "styled-system";

export default StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    padding: 22,
    paddingTop: 100,
    alignItems: "center",
  },
  boxProfile: {
    alignItems: "center",
  },
  textProfile: {
    color: "#FFF",
    fontSize: 26,
    marginTop: 20,
    textTransform: "capitalize",
  },
  textDescription: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  textActivity: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 22,
    marginTop: 20,
    letterSpacing: 2,
  },
  cardTotalActivity: {
    width: 120,
    height: 120,
    borderRadius: 200,
    backgroundColor: "#5F67FF",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTotalActivity: {
    marginTop: 20,
    alignItems: "center",
  },
  textTotalActivity: {
    color: "#FFF",
    fontSize: 48,
    paddingBottom: 15,
  },
  boxLogout: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    alignItems: "center",
    zIndex: 999,
  },
  btnLogout: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "blue",
    borderRadius: 8,
    width: "30%",
  },
  textLogout: {
    color: "#FFF",
    paddingBottom: 5,
  },
});

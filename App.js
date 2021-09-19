import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import Container from "./Container";

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  const fontConfig = {
    Quicksand: {
      400: {
        normal: "Quicksand_400Regular",
      },
      500: {
        medium: "Quicksand_500Medium",
      },
      600: {
        semiBold: "Quicksand_600SemiBold",
      },
    },
  };

  const customeColor = {
    primary: {
      50: "#5F67FF",
      100: "#FF5757",
      200: "#930707",
    },
  };

  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "Quicksand",
      body: "Quicksand",
      mono: "Quicksand",
    },
    config: { initialColorMode: "light" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}

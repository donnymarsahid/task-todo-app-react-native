import * as React from "react";
import Activity from "./src/screens/Activity";
import History from "./src/screens/History";
import AddActivity from "./src/screens/AddActivity";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";
const Stack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Activity"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Activity") {
            iconName = focused
              ? "ios-color-filter"
              : "ios-color-filter-outline";
          } else if (route.name === "History") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: "History Screen",
          }}
        />
        <Stack.Screen
          name="Add Activity"
          component={AddActivity}
          options={{
            title: "Add Activity",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

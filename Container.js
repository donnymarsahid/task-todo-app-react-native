import * as React from "react";
import Activity from "./src/screens/Activity";
import History from "./src/screens/History";
import AddActivity from "./src/screens/AddActivity";
import Login from "./src/screens/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";
const Stack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";
import UpdateActivity from "./src/screens/UpdateActivity";

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Activity"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Activity") {
            iconName = focused
              ? "ios-color-filter"
              : "ios-color-filter-outline";
          } else if (route.name === "History") {
            iconName = focused ? "ios-pie-chart" : "ios-pie-chart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["700"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UpdateActivity"
          component={UpdateActivity}
          options={{
            title: "UpdateActivity",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

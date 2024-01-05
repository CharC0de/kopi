import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../app/screens/StartScreen";
import HomeScreen from '../app/screens/HomeScreen'
import CoffeeDetailsScreen from "../app/screens/CoffeeDetailsScreen";
import CartScreen from "../app/screens/CartScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoffeeDetails"
          component={CoffeeDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./app/screens/StartScreen";
import HomeScreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import CartScreen from "./app/screens/CartScreen";
import OrderPreparingScreen from "./app/screens/OrderPreparingScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
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
        <Stack.Screen
          name="Order"
          component={OrderPreparingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

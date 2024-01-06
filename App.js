import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import Store from "./Store";

// const StackNavigator = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Start"
//         component={StartScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Main"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="CoffeeDetails"
//         component={CoffeeDetailsScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{ headerShown: false, presentation: "modal" }}
//       />
//       <Stack.Screen
//         name="Order"
//         component={OrderPreparingScreen}
//         options={{ headerShown: false, presentation: "modal" }}
//       />
//     </Stack.Navigator>
//   );
// };

// const DrawerNav = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Drawer.Screen name="Home" component={StackNavigator} />
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  );
};
export default App;

const styles = StyleSheet.create({});

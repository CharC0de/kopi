import { StyleSheet, Text, View, Image } from "react-native";
import React, {useEffect} from "react";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { useNavigation } from "@react-navigation/native";

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate("Main");
        }, 3000);
      }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{ borderRadius: 100, height: 180 }}
        source={require("../../assets/giphy.gif")}
      />
      <Text style={styles.text}>Preparing for Orders</Text>
    </View>
  );
};

export default OrderPreparingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["dark-light"],
  },
  text: {
    fontSize: SPACING * 2,
    color: colors["white-smoke"],
    fontWeight: '800',
    fontStyle: 'italic',
    marginTop: 15
  }
});

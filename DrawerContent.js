import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./app/config/colors";

const DrawerList = [
  { icon: "calendar", label: "Calendar", navigateTo: "" },
  { icon: "wallet-giftcard", label: "Rewards", navigateTo: "" },
  { icon: "pin", label: "Address", navigateTo: "" },
  { icon: "credit-card-fast-outline", label: "Payment Methods", navigateTo: "" },
  { icon: "offer", label: "Offers", navigateTo: "" },
  { icon: "account-group", label: "Refer a Friend", navigateTo: "" },
  { icon: "pin", label: "Support", navigateTo: "" },
];
const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ size }) => <Icon name={icon} color={colors["white-smoke"]} size={size} />}
      label={label}
      labelStyle={{color: colors["white-smoke"]}}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = (props) => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};
function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors["dark-light"] }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={require('./assets/avatar.png')}
                  size={50}
                  style={{ marginTop: 5 }}
                />
                <View style={{ marginLeft: 10, flexDirection: "column" }}>
                  <Title style={styles.title}>Mordecai</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    mordecaiandrigby@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="exit-to-app" color={colors["white-smoke"]} size={size} />
          )}
          label="Sign Out"
          labelStyle={{color: colors["white-smoke"]}}
        />
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: colors.white
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: colors["white-smoke"],
    width: "100%",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

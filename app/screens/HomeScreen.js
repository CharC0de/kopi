import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {

  const navigation = useNavigation();
  const [activeCategoryId, setActiveCategoryId] = useState(null)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView style={{ padding: SPACING }}>
        <View
          style={{
            padding: SPACING,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {navigation.navigate('Cart')}}
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Ionicons
                  name="ios-cart"
                  size={SPACING * 2}
                  color={colors.light}
                />
            </BlurView>
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 3.5,
              fontWeight: "600",
            }}
          >
            Coffee, because adulting is hard.
          </Text>
        </View>
        <SearchField />
        <Categories onChange={(id) => setActiveCategoryId(id)}/>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees.filter(coffee => {
            if (activeCategoryId === null) {
              return true;
            }
            return coffee.categoryId === activeCategoryId;
          }).map((coffee) => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - SPACING * 2,
                marginBottom: SPACING,
                borderRadius: SPACING * 2,
                overflow: "hidden",
              }}
            >
              <BlurView intensity={95} tint="dark" style={{ padding: SPACING }}>
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CoffeeDetails", {coffee})
                }}
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={coffee.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: SPACING * 2,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      borderBottomStartRadius: SPACING * 3,
                      borderTopEndRadius: SPACING * 3,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: SPACING - 2,
                      }}
                    >
                      <AntDesign
                        style={{
                          marginLeft: SPACING / 2,
                        }}
                        name="star"
                        size={SPACING * 1.7}
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          color: colors.white,
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {coffee.rating}
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors.white,
                    fontWeight: "600",
                    fontSize: SPACING * 1.7,
                    marginTop: SPACING,
                    marginBottom: SPACING / 2,
                  }}
                >
                  {coffee.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    color: colors.secondary,
                    fontSize: SPACING * 1.2,
                  }}
                >
                  {coffee.included}
                </Text>
                <View style={{
                  marginVertical: SPACING / 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: colors.primary,
                        marginRight: SPACING / 2,
                        fontSize: SPACING * 1.6
                      }}
                    >
                      $
                    </Text>
                    <Text style={{color: colors.white, fontSize: SPACING * 1.6}}>{coffee.price}</Text>
                  </View>
                  <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    padding: SPACING/2,
                    borderRadius: SPACING
                  }}>
                  <Ionicons name="add" size={SPACING * 2} color={colors.white} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import cart from "../config/cart";
import SPACING from "../config/SPACING";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const { height, width } = Dimensions.get("window");
const size = ["Tall", "Grande", "Venti"];

const CoffeeDetailsScreen = () => {
  useEffect(() => {
    setActiveSize(size[0]);
    console.log(cart);
  });
  const navigation = useNavigation();
  const route = useRoute();
  const { coffee } = route.params;
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = (item, activeSize, quantity) => {
    hasDupes = false;
    cart.details.map((coffee) => {
      if (coffee[0].name == item.name) {
        coffee[2] += quantity;
        hasDupes = true;
        console.log(hasDupes);
      }
    });
    hasDupes ? null : cart.details.push([item, activeSize, quantity]);
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.dark, flex: 1 }}>
        <SafeAreaView>
          <ImageBackground
            style={{
              height: height / 2 + SPACING * 8,
              justifyContent: "space-between",
            }}
            imageStyle={{
              borderRadius: SPACING * 3,
            }}
            source={coffee.image}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SPACING * 2,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Main");
                }}
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={SPACING * 2}
                  color={colors.light}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
              >
                <Ionicons
                  name="heart"
                  size={SPACING * 2}
                  color={colors.light}
                />
              </TouchableOpacity>
            </View>
            <View style={{ borderRadius: SPACING * 3, overflow: "hidden" }}>
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  padding: SPACING * 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      color: colors.white,
                      fontWeight: "600",
                      marginBottom: SPACING,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.8,
                      color: colors["white-smoke"],
                      fontWeight: "500",
                      marginBottom: SPACING,
                    }}
                  >
                    {coffee.included}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: SPACING }}>
                    <Ionicons
                      name="star"
                      size={SPACING * 1.5}
                      color={colors.primary}
                    />
                    <Text style={{ color: colors.white, marginLeft: SPACING }}>
                      {coffee.rating}
                    </Text>
                  </View>
                </View>
                <View style={{ width: "35%", justifyContent: "space-between" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: colors.primary,
                          fontSize: SPACING * 3,
                          fontWeight: "700",
                        }}
                      >
                        ${coffee.price}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        backgroundColor: colors.dark,
                        padding: SPACING / 2,
                        borderRadius: SPACING / 2,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: SPACING * 1.3,
                        }}
                      >
                        Medium roasted
                      </Text>
                    </View>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>
          <View style={{ padding: SPACING }}>
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: SPACING * 1.7,
                marginBottom: SPACING,
              }}
            >
              Description
            </Text>
            <Text numberOfLines={3} style={{ color: colors.white }}>
              {coffee.description}
            </Text>
            <View style={{ marginVertical: SPACING * 2 }}>
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING,
                }}
              >
                Size Options
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {size.map((size, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => setActiveSize(size)}
                      style={[
                        {
                          paddingVertical: SPACING / 2,
                          alignItems: "center",
                          borderWidth: 2,
                          borderRadius: SPACING * 2,
                          backgroundColor: colors["dark-light"],
                          width: width / 3 - SPACING * 2,
                        },
                        activeSize === size && {
                          borderColor: colors.primary,
                          backgroundColor: colors.dark,
                        },
                      ]}
                    >
                      <Image
                        style={[
                          {
                            height: 30,
                            width: 30,
                            tintColor: colors["white-smoke"],
                          },
                          activeSize === size && {
                            tintColor: colors.primary,
                          },
                        ]}
                        source={require("../../assets/drink.png")}
                      />
                      <Text
                        style={[
                          {
                            color: colors["white-smoke"],
                            fontSize: SPACING * 1.9,
                          },
                          activeSize === size && {
                            color: colors.primary,
                          },
                        ]}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView style={{ backgroundColor: colors.dark }}>
        <View
          style={{
            paddingHorizontal: SPACING * 3,
            paddingVertical: SPACING,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              style={{
                padding: 5,
                backgroundColor: colors.primary,
                borderRadius: 100,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 2,
                fontWeight: "700",
                marginHorizontal: SPACING,
                textShadowOffset: { width: 1, height: 2 },
                textShadowColor: colors["white-smoke"],
                textShadowRadius: 5,
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => setQuantity((c) => c + 1)}
              style={{
                padding: 5,
                backgroundColor: colors.primary,
                borderRadius: 100,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                //navigation.navigate("Main", { coffee, quantity });
                addToCart(coffee, activeSize, quantity);
                console.log(cart);
              }}
              style={{
                padding: SPACING + 5,
                backgroundColor: colors.primary,
                width: width / 2 + SPACING,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SPACING * 3,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import cart from "../config/cart";

const CartScreen = () => {
  const [currCart, setCart] = useState([]);
  const navigation = useNavigation();
  // const { coffee, quantity } = route.params;
  // const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const [selectedMode, setSelectedMode] = useState(null);
  useEffect(() => setCart(cart.details));
  return (
    <>
      <View
        style={{
          backgroundColor: colors.dark,
          flex: 1,
          paddingHorizontal: 18,
        }}
      >
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main");
              }}
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={SPACING * 2}
                  color={colors.light}
                />
              </BlurView>
            </TouchableOpacity>
            <Text
              style={{
                color: colors.white,
                justifyContent: "center",
                alignSelf: "center",
                fontSize: SPACING * 1.5,
                fontWeight: "700",
                marginLeft: SPACING,
              }}
            >
              My Cart
            </Text>
          </View>
          {currCart.length > 0 ? (
            currCart.map((char) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <View>
                  {
                    <Image
                      style={{ height: 100, width: 100, borderRadius: SPACING }}
                      source={char[0].image}
                    />
                  }
                </View>
                <View style={{ justifyContent: "space-evenly" }}>
                  <Text
                    style={{
                      color: colors["white-smoke"],
                      fontWeight: "bold",
                      fontSize: SPACING * 2.3,
                      right: 40,
                    }}
                  >
                    {char[0].name}
                  </Text>
                  <Text
                    style={{
                      color: colors.light,
                      fontSize: (SPACING / 2) * 3,
                      right: 40,
                      bottom: 1,
                    }}
                  >
                    ${char[0].price}
                  </Text>
                </View>
                <View style={{ justifyContent: "space-between" }}>
                  <TouchableOpacity
                    onPress={() => {
                      cart.details = cart.details.map((item) => {
                        item[2] =
                          item[0].name == char[0].name ? item[2] + 1 : item[2];
                        return item;
                      });
                      setCart(cart.details);
                    }}
                    style={{
                      backgroundColor: colors.primary,
                      borderRadius: 100,
                      height: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: SPACING * 2,
                        fontWeight: "700",
                        alignSelf: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
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
                    {char[2]}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      toDelete = false;
                      index = 0;
                      cart.details = cart.details.map((item, i) => {
                        item[2] =
                          item[0].name == char[0].name
                            ? Math.max(0, item[2] - 1)
                            : item[2];

                        if (item[2] == 0) {
                          toDelete = true;
                          index = i;
                        }

                        return item;
                      });
                      console.log(toDelete);
                      toDelete ? cart.details.splice(index, 1) : null;
                      setCart(cart.details);
                    }}
                    style={{
                      backgroundColor: colors.primary,
                      borderRadius: 100,
                      height: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: SPACING * 2,
                        fontWeight: "700",
                        alignSelf: "center",
                        justifyContent: "center",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text
              style={{
                color: colors.white,
                justifyContent: "center",
                alignSelf: "center",
                fontSize: SPACING * 1.5,
                fontWeight: "700",
                marginLeft: SPACING,
              }}
            >
              No items added yet
            </Text>
          )}

          {/* Mode */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                padding: SPACING,
                width: "50%",
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                Pickup
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                borderWidth: 2,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                padding: SPACING,
                width: "50%",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                Delivery
              </Text>
            </TouchableOpacity>
          </View>

          {/* Details */}
          <View style={{ marginVertical: 10 }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: colors.light, fontSize: SPACING * 1.5 }}>
                  Delivery to
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{ color: colors.primary, fontSize: SPACING * 1.5 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "600",
                  marginVertical: 10,
                }}
              >
                INSERT ADDRESS HERE
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: colors.light, fontSize: SPACING * 1.5 }}>
                  Delivery service, Delivery by
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{ color: colors.primary, fontSize: SPACING * 1.5 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "600",
                  marginVertical: 10,
                }}
              >
                INSERT ADDRESS HERE, DATE
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: colors.dark }}>
        <View
          style={{
            backgroundColor: "#ffc299",
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          {/* Total */}
          <View style={{ marginBottom: 25, marginTop: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.5,
                  fontWeight: "500",
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.5,
                  fontWeight: "500",
                }}
              >
                {/* ${coffee.price * quantity} */}$
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 13,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.5,
                  fontWeight: "500",
                }}
              >
                Delivery
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.5,
                  fontWeight: "500",
                }}
              >
                $10
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.9,
                  fontWeight: "900",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 1.9,
                  fontWeight: "900",
                }}
              >
                {/* ${coffee.price * quantity + 10} */}$
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 100,
              alignItems: "center",
              padding: SPACING,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "700",
                fontSize: SPACING + 6,
              }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

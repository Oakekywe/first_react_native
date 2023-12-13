import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/kaneshiro.jpeg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    width: 70,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 70,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

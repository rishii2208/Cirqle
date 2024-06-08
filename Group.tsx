import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

const Group = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <LinearGradient
        style={[styles.groupItem, styles.groupPosition]}
        locations={[0, 1]}
        colors={["#fffefe", "rgba(255, 255, 255, 0.35)"]}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.peopleTeamUndefinedGlyp}
        contentFit="cover"
        source={require("../assets/people-team--undefined--glyph-undefined.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    top: 61,
    backgroundColor: "#0f172a",
    width: 393,
    height: 18,
  },
  groupItem: {
    top: 0,
    borderStyle: "solid",
    borderColor: "rgba(243, 243, 243, 0.5)",
    borderWidth: 1,
    width: 397,
    backgroundColor: "transparent",
    height: 79,
  },
  vectorIcon: {
    height: "44.3%",
    width: "9.32%",
    top: "24.05%",
    right: "84.63%",
    bottom: "31.65%",
    left: "6.05%",
  },
  vectorIcon1: {
    height: "34.18%",
    width: "7.3%",
    top: "29.11%",
    right: "29.72%",
    bottom: "36.71%",
    left: "62.97%",
  },
  peopleTeamUndefinedGlyp: {
    top: 17,
    left: 135,
    width: 40,
    height: 39,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon2: {
    height: "5.06%",
    width: "4.03%",
    top: "45.57%",
    right: "6.3%",
    bottom: "49.37%",
    left: "89.67%",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 79,
  },
});

export default Group;

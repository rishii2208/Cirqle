import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro6 = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <Image
        style={styles.intersectIcon}
        contentFit="cover"
        source={require("../assets/intersect5.png")}
      />
      <View style={[styles.component1, styles.component1Layout]}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union3.png")}
        />
        <Text style={[styles.signIn, styles.signTypo]}>SIGN IN</Text>
      </View>
      <View style={[styles.unionParent, styles.component1Layout]}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union3.png")}
        />
        <Text style={[styles.signUp, styles.signTypo]}>SIGN UP</Text>
      </View>
      <Text style={[styles.signInWith, styles.signTypo]}>Sign in with</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Text style={[styles.welcomeToCirqle, styles.welcomeToCirqlePosition]}>
        Welcome to Cirqle!
      </Text>
      <View
        style={[styles.iphone1415Pro1Child, styles.welcomeToCirqlePosition]}
      />
      <Image
        style={styles.whatsappImage20240608At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240608-at-1759-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component1Layout: {
    height: 51,
    left: 64,
    width: 264,
    position: "absolute",
  },
  signTypo: {
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.nATS,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.38%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeToCirqlePosition: {
    left: 21,
    position: "absolute",
  },
  intersectIcon: {
    width: 660,
    height: 761,
  },
  unionIcon: {
    height: 48,
    width: 264,
  },
  signIn: {
    left: "37.12%",
    textAlign: "left",
    top: "0%",
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.nATS,
    fontSize: FontSize.size_5xl,
  },
  component1: {
    top: 524,
  },
  signUp: {
    left: "36.74%",
    textAlign: "left",
    top: "0%",
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.nATS,
    fontSize: FontSize.size_5xl,
  },
  unionParent: {
    top: 609,
  },
  signInWith: {
    top: 748,
    left: 145,
    textAlign: "left",
  },
  vectorIcon: {
    height: "3.47%",
    right: "60.56%",
    bottom: "2.75%",
    left: "32.06%",
    top: "93.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.38%",
  },
  vectorIcon1: {
    height: "3.38%",
    right: "46.31%",
    bottom: "2.84%",
    left: "46.31%",
    top: "93.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.38%",
  },
  vectorIcon2: {
    height: "2.72%",
    top: "94.25%",
    right: "32.06%",
    bottom: "3.03%",
    left: "60.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.38%",
  },
  welcomeToCirqle: {
    top: 57,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  iphone1415Pro1Child: {
    top: 100,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 351,
    height: 1,
  },
  whatsappImage20240608At1: {
    marginTop: -163,
    marginLeft: -116.5,
    top: "50%",
    left: "50%",
    width: 233,
    height: 239,
    position: "absolute",
  },
  iphone1415Pro1: {
    backgroundColor: "#00035e",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro6;

import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1415Pro3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415Pro5}>
      <View style={styles.iphone1415Pro5Child} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.rectangleBorder]} />
        <Text
          style={[styles.chooseYourInterests, styles.chooseYourInterestsTypo]}
        >
          Choose your Interests!
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={styles.iphone1415Pro5Item}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={styles.jacobJones}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text style={[styles.jacobJones1, styles.jacobJones1Typo]}>
          Jacob Jones
        </Text>
      </Pressable>
      <Pressable
        style={styles.myCommunities}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text style={[styles.myCommunities1, styles.myCommunities1Clr]}>
          My Communities
        </Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.ionwalletIcon}
        contentFit="cover"
        source={require("../assets/ionwallet.png")}
      />
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <Image
        style={[styles.iphone1415Pro5Inner, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleBorder]} />
      <View style={[styles.rectangle1, styles.rectangleLayout]} />
      <Pressable
        style={styles.pieReactCommunityContainer}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text
          style={[styles.pieReactCommunityNewDelh, styles.myCommunities1Clr]}
        >
          Pie React Community - New Delhi
        </Text>
      </Pressable>
      <Pressable
        style={styles.theFastestGrowingContainer}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text
          style={[
            styles.theFastestGrowingCommunity,
            styles.chooseYourInterestsTypo,
          ]}
        >
          The fastest growing community for React Developers in New Delhi ...
        </Text>
      </Pressable>
      <Pressable
        style={styles.checkout}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text style={styles.checkout1}>CheckOut!</Text>
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 45,
    width: 350,
  },
  rectangleBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  chooseYourInterestsTypo: {
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jacobJones1Typo: {
    height: 28,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  myCommunities1Clr: {
    color: Color.colorGray_300,
    textAlign: "left",
  },
  rectangleLayout: {
    width: 100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  iphone1415Pro5Child: {
    top: 332,
    left: 275,
    width: 76,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorDimgray,
    borderColor: Color.colorGray_400,
    left: 0,
    position: "absolute",
    height: 45,
    width: 350,
  },
  chooseYourInterests: {
    top: 13,
    left: 45,
    color: Color.colorGray_500,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -8.5,
    width: "5.14%",
    top: "50%",
    right: "91.14%",
    left: "3.71%",
    height: 18,
  },
  rectangleParent: {
    top: 89,
    left: 22,
    position: "absolute",
  },
  iphone1415Pro5Item: {
    top: 25,
    left: 28,
    width: 51,
    height: 51,
    position: "absolute",
  },
  jacobJones1: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
    width: 121,
    textAlign: "left",
  },
  jacobJones: {
    left: 94,
    top: 36,
    position: "absolute",
  },
  myCommunities1: {
    fontSize: FontSize.size_xl,
    width: 277,
    height: 28,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  myCommunities: {
    left: 25,
    top: 159,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.76%",
    width: "2.04%",
    top: "5.05%",
    right: "45.29%",
    bottom: "93.19%",
    left: "52.67%",
    maxHeight: "100%",
  },
  ionwalletIcon: {
    top: 38,
    left: 338,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: -476,
    left: 109,
    backgroundColor: "#2563eb",
    height: 100,
  },
  iphone1415Pro5Inner: {
    top: 776,
    width: 397,
    height: 79,
  },
  rectangleView: {
    top: 212,
    left: 21,
    borderRadius: 33,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorBlack,
    width: 349,
    height: 168,
    position: "absolute",
  },
  rectangle1: {
    top: 322,
    left: 262,
    backgroundColor: "rgba(0, 149, 255, 0.58)",
    borderColor: "#eff6ff",
    height: 43,
    borderWidth: 1,
    borderStyle: "solid",
  },
  pieReactCommunityNewDelh: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    width: 215,
    height: 50,
  },
  pieReactCommunityContainer: {
    left: 105,
    top: 230,
    position: "absolute",
  },
  theFastestGrowingCommunity: {
    fontSize: FontSize.size_smi,
    color: "rgba(51, 65, 85, 0.75)",
    width: 246,
    height: 54,
    textAlign: "left",
  },
  theFastestGrowingContainer: {
    left: 33,
    top: 323,
    position: "absolute",
  },
  checkout1: {
    fontWeight: "800",
    fontFamily: FontFamily.notoSansExtraBold,
    color: Color.colorWhite,
    width: 82,
    height: 33,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  checkout: {
    left: 276,
    top: 334,
    position: "absolute",
  },
  ellipseIcon: {
    top: 238,
    left: 44,
    width: 42,
    height: 42,
    position: "absolute",
  },
  iphone1415Pro5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro3;

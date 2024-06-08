import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415Pro7}>
      <View style={[styles.iphone1415Pro7Child, styles.iphone1415Layout1]} />
      <View style={[styles.iphone1415Pro7Item, styles.iphone1415Layout]} />
      <LinearGradient
        style={[styles.iphone1415Pro7Inner, styles.iphone1415Layout]}
        locations={[0, 1]}
        colors={["#ff9ae9", "#a82fbc"]}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.chooseYourInterests}>Choose your Interests!</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={styles.ellipseIcon}
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
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.ionwalletIcon}
        contentFit="cover"
        source={require("../assets/ionwallet.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-162.png")}
      />
      <Text style={[styles.yourDashboard, styles.yourDashboardTypo]}>
        Your Dashboard
      </Text>
      <Text style={[styles.inDemandSkills, styles.dailyRewardsTypo]}>
        In-Demand Skills
      </Text>
      <Text style={[styles.dailyRewards, styles.dailyRewardsTypo]}>
        Daily Rewards
      </Text>
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout1]} />
      <View
        style={[styles.iphone1415Pro7Child1, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro7Child2, styles.iphone1415ChildLayout1]}
      />
      <Image
        style={[styles.iphone1415Pro7Child3, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.iphone1415Pro7Child4, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.iphone1415Pro7Child5, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.python, styles.pythonTypo]}>Python</Text>
      <Text style={[styles.docker, styles.pythonTypo]}>Docker</Text>
      <Text style={[styles.kotlin, styles.pythonTypo]}>Kotlin</Text>
      <View
        style={[
          styles.iphone1415Pro7Child6,
          styles.iphone1415Pro7Child6Position,
        ]}
      />
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.iphone1415Pro7Child6Position,
        ]}
        locations={[0, 1]}
        colors={["#94b9f1", "#4169e1"]}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text
        style={[styles.exploreCommunities, styles.yourDashboardTypo]}
      >{`Explore 
Communities`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout1: {
    width: 367,
    backgroundColor: Color.colorWhite,
  },
  iphone1415Layout: {
    height: 101,
    borderRadius: Border.br_smi,
    left: 14,
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 350,
    position: "absolute",
  },
  jacobJones1Typo: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  yourDashboardTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  dailyRewardsTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 28,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415ChildLayout1: {
    width: 78,
    borderRadius: Border.br_sm,
    top: 253,
    height: 101,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 65,
    width: 65,
    top: 271,
    position: "absolute",
  },
  pythonTypo: {
    top: 354,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone1415Pro7Child6Position: {
    height: 14,
    borderRadius: Border.br_31xl,
    left: 32,
    top: 452,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "44.95%",
    top: "52.35%",
    width: "5.85%",
    height: "2.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415Pro7Child: {
    top: 196,
    height: 185,
    borderRadius: Border.br_smi,
    left: 14,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iphone1415Pro7Item: {
    top: 399,
    width: 367,
    backgroundColor: Color.colorWhite,
  },
  iphone1415Pro7Inner: {
    top: 517,
    width: 189,
    backgroundColor: "transparent",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorDimgray,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
  },
  chooseYourInterests: {
    top: 13,
    left: 45,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
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
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 103,
    left: 22,
  },
  ellipseIcon: {
    top: 39,
    width: 51,
    height: 51,
    left: 28,
    position: "absolute",
  },
  jacobJones1: {
    fontSize: FontSize.size_lg,
    width: 121,
    height: 28,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  jacobJones: {
    left: 94,
    top: 50,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.76%",
    width: "2.04%",
    top: "6.69%",
    right: "45.29%",
    bottom: "91.55%",
    left: "52.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ionwalletIcon: {
    top: 52,
    left: 338,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 773,
    left: -2,
    width: 397,
    height: 79,
    position: "absolute",
  },
  yourDashboard: {
    top: 161,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    color: Color.colorGray_200,
    left: 22,
  },
  inDemandSkills: {
    top: 207,
  },
  dailyRewards: {
    top: 408,
  },
  rectangleView: {
    left: 44,
    backgroundColor: "#ea82ec",
  },
  iphone1415Pro7Child1: {
    left: 163,
    backgroundColor: "#f3e496",
  },
  iphone1415Pro7Child2: {
    left: 277,
    backgroundColor: "#8ab2ed",
  },
  iphone1415Pro7Child3: {
    left: 50,
  },
  iphone1415Pro7Child4: {
    left: 170,
  },
  iphone1415Pro7Child5: {
    left: 283,
  },
  python: {
    left: 54,
  },
  docker: {
    left: 177,
  },
  kotlin: {
    left: 291,
  },
  iphone1415Pro7Child6: {
    backgroundColor: Color.colorGainsboro_100,
    width: 330,
  },
  rectangleLineargradient: {
    width: 251,
    backgroundColor: "transparent",
  },
  vectorIcon2: {
    right: "79.13%",
    left: "15.01%",
  },
  vectorIcon3: {
    right: "61.07%",
    left: "33.08%",
  },
  vectorIcon4: {
    right: "45.55%",
    left: "48.6%",
  },
  vectorIcon5: {
    right: "29.52%",
    left: "64.63%",
  },
  vectorIcon6: {
    right: "11.45%",
    left: "82.7%",
  },
  exploreCommunities: {
    top: 541,
    left: 30,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  iphone1415Pro7: {
    backgroundColor: "#e2e2e2",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro5;

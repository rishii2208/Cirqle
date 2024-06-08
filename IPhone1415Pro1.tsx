import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415Pro1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415Pro3, styles.iconLayout]}>
      <View style={[styles.iphone1415Pro3Child, styles.iphone1415Bg]} />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.web3}>Web3</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.iphone1415Pro3Item, styles.iphone1415Bg]} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Image
          style={[styles.groupInner, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <Text style={[styles.leslieAmber, styles.connectNowClr]}>
          Leslie Amber
        </Text>
        <Text
          style={[styles.companyAmazonExperience, styles.connectNowClr]}
        >{`Company: Amazon
Experience: 5 years`}</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-201.png")}
        />
        <Image
          style={[styles.groupInner, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <Text style={[styles.leslieAmber, styles.connectNowClr]}>
          Robert Fox
        </Text>
        <Text
          style={[styles.companyAmazonExperience, styles.connectNowClr]}
        >{`Company: Microsoft
Experience: 4 years`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-202.png")}
        />
        <Image
          style={[styles.groupInner, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <Text style={[styles.leslieAmber, styles.connectNowClr]}>
          Wade Warren
        </Text>
        <Text
          style={[styles.companyAmazonExperience, styles.connectNowClr]}
        >{`Company: TCS
Experience: 5 years`}</Text>
      </View>
      <View style={[styles.iphone1415Pro3Inner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.topExperts, styles.topExpertsTypo]}>
        Top Experts
      </Text>
      <Image
        style={[styles.icbaselineCallMadeIcon, styles.icbaselineIconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinecallmade.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Pressable
        style={[styles.icbaselineCallMade, styles.icbaselineIconLayout]}
        onPress={() => navigation.navigate("IPhone1415Pro4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icbaselinecallmade1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icbaselineCallMadeIcon1, styles.icbaselineIconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinecallmade1.png")}
      />
      <View style={[styles.rectangleView, styles.iphone1415Bg]} />
      <Text style={[styles.connectNow, styles.connectNowClr]}>
        Connect now!
      </Text>
      <Text style={[styles.wouldYouLike, styles.topExpertsTypo]}>
        Would you like to explore?
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.iphone1415Pro3Child1, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.iphone1415Pro3Child2, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.iphone1415Pro3Child3, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.iphone1415Pro3Child4} />
      <Text style={[styles.text, styles.proTypo]}>+51</Text>
      <Image
        style={styles.fluentvideo16FilledIcon}
        contentFit="cover"
        source={require("../assets/fluentvideo16filled.png")}
      />
      <View style={[styles.intersectParent, styles.intersectLayout]}>
        <Image
          style={styles.intersectLayout}
          contentFit="cover"
          source={require("../assets/intersect3.png")}
        />
        <Text style={[styles.pro, styles.proTypo]}>PRO</Text>
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={styles.iphone1415Pro3Child5}
        contentFit="cover"
        source={require("../assets/group-18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iphone1415Bg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 121,
    position: "absolute",
  },
  connectNowClr: {
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    height: 2,
    width: 332,
    borderTopWidth: 1.5,
    borderColor: Color.colorGray_200,
    left: 21,
    borderStyle: "solid",
    position: "absolute",
  },
  topExpertsTypo: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  icbaselineIconLayout: {
    height: 26,
    width: 26,
    left: 328,
    position: "absolute",
  },
  frameIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ChildLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  proTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  intersectLayout: {
    height: 20,
    width: 35,
  },
  iphone1415Pro3Child: {
    top: 19,
    left: -15,
    width: 418,
    height: 98,
  },
  groupChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorDimgray,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: 45,
    width: 350,
    position: "absolute",
  },
  web3: {
    top: 12,
    left: 44,
    color: "rgba(30, 30, 30, 0.8)",
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
  },
  rectangleParent: {
    top: 45,
    left: 22,
    height: 45,
    width: 350,
    position: "absolute",
  },
  iphone1415Pro3Item: {
    top: 126,
    left: -14,
    width: 420,
    height: 493,
  },
  groupItem: {
    borderRadius: Border.br_mid,
    width: 95,
    left: 0,
    height: 121,
    top: 0,
  },
  groupInner: {
    height: "13.31%",
    width: "26.32%",
    top: "74.38%",
    right: "35.86%",
    bottom: "12.31%",
    left: "37.83%",
    maxHeight: "100%",
  },
  leslieAmber: {
    top: 9,
    fontSize: FontSize.size_4xl,
    width: 189,
    height: 50,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_200,
    left: 115,
  },
  companyAmazonExperience: {
    top: 43,
    fontSize: FontSize.size_base,
    width: 176,
    height: 73,
    left: 115,
    color: Color.colorGray_200,
    fontFamily: FontFamily.notoSansRegular,
  },
  rectangleGroup: {
    top: 178,
    width: 304,
    height: 121,
    left: 15,
  },
  rectangleContainer: {
    top: 325,
    width: 304,
    height: 121,
    left: 15,
  },
  groupView: {
    top: 464,
    width: 304,
    height: 121,
    left: 15,
  },
  iphone1415Pro3Inner: {
    top: 311,
  },
  lineView: {
    top: 454,
  },
  topExperts: {
    top: 132,
    left: 15,
  },
  icbaselineCallMadeIcon: {
    top: 192,
    overflow: "hidden",
  },
  frameIcon: {
    left: 283,
    top: 192,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  icbaselineCallMade: {
    top: 331,
  },
  icbaselineCallMadeIcon1: {
    top: 474,
    overflow: "hidden",
  },
  rectangleView: {
    top: 631,
    width: 393,
    height: 140,
    left: 0,
  },
  connectNow: {
    top: 740,
    left: 279,
    width: 127,
    height: 14,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_200,
    fontSize: FontSize.size_mini,
  },
  wouldYouLike: {
    top: 642,
    left: 13,
  },
  ellipseIcon: {
    left: 90,
    top: 684,
    height: 56,
    width: 56,
  },
  iphone1415Pro3Child1: {
    left: 63,
    top: 684,
    height: 56,
    width: 56,
  },
  iphone1415Pro3Child2: {
    left: 35,
    top: 684,
    height: 56,
    width: 56,
  },
  iphone1415Pro3Child3: {
    top: 685,
    left: 15,
  },
  iphone1415Pro3Child4: {
    top: 705,
    left: 123,
    borderRadius: 11,
    backgroundColor: "#76abfc",
    width: 61,
    height: 22,
    position: "absolute",
  },
  text: {
    top: 708,
    left: 140,
    fontSize: FontSize.size_xs,
  },
  fluentvideo16FilledIcon: {
    top: 694,
    left: 308,
    width: 44,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  pro: {
    top: 3,
    left: 9,
    fontSize: 11,
  },
  intersectParent: {
    top: 326,
    left: 16,
    position: "absolute",
  },
  frameIcon1: {
    top: 338,
    left: 259,
  },
  frameIcon2: {
    top: 476,
    left: 293,
  },
  iphone1415Pro3Child5: {
    top: 777,
    left: -3,
    width: 397,
    height: 79,
    position: "absolute",
  },
  iphone1415Pro3: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro1;

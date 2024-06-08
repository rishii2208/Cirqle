import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415Pro4, styles.iconLayout]}>
      <Image
        style={styles.intersectIcon}
        contentFit="cover"
        source={require("../assets/intersect4.png")}
      />
      <Image
        style={styles.iphone1415Pro4Child}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Text style={styles.jacobJones}>Jacob Jones</Text>
      <Image
        style={styles.heroiconspencil20Solid}
        contentFit="cover"
        source={require("../assets/heroiconspencil20solid.png")}
      />
      <View style={[styles.iphone1415Pro4Item, styles.iphone1415Layout]} />
      <Pressable
        style={[styles.iphone1415Pro4Inner, styles.iphone1415Layout]}
        onPress={() => navigation.navigate("IPhone1415Pro6")}
      />
      <View style={[styles.rectangleView, styles.iphone1415Layout]} />
      <View
        style={[
          styles.iphone1415Pro4Child1,
          styles.iphone1415Pro4Child1Position,
        ]}
      />
      <Text style={[styles.sbts, styles.sbtsTypo]}>SBTs:</Text>
      <Text style={[styles.walletBalance507, styles.ionwalletIconPosition]}>
        Wallet Balance: 5.07
      </Text>
      <Text
        style={[styles.recentActivity, styles.sbtsTypo]}
      >{`Recent Activity `}</Text>
      <Text style={[styles.logOut, styles.sbtsTypo]}>Log out</Text>
      <Text style={[styles.tokens, styles.sbtsTypo]}>256 tokens</Text>
      <Image
        style={[
          styles.whatsappImage20240608At1,
          styles.iphone1415Pro4Child1Position,
        ]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240608-at-1640-1.png")}
      />
      <Image
        style={[styles.ionwalletIcon, styles.ionwalletIconPosition]}
        contentFit="cover"
        source={require("../assets/ionwallet1.png")}
      />
      <Pressable
        style={styles.mingcutebackFill}
        onPress={() => navigation.navigate("IPhone1415Pro3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mingcutebackfill.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["rgba(121, 215, 255, 0.75)", "rgba(82, 64, 192, 0.75)"]}
      />
      <Text style={[styles.becomeAPro, styles.becomeAProClr]}>
        Become a pro user now
      </Text>
      <Text
        style={[styles.startingWithOnly, styles.becomeAProClr]}
      >{`starting with only 1TON per month `}</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.majesticonscamera}
        contentFit="cover"
        source={require("../assets/majesticonscamera.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-181.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iphone1415Layout: {
    height: 64,
    width: 355,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xs,
    left: 18,
  },
  iphone1415Pro4Child1Position: {
    top: 498,
    position: "absolute",
  },
  sbtsTypo: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
  },
  ionwalletIconPosition: {
    top: 424,
    position: "absolute",
  },
  becomeAProClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  intersectIcon: {
    width: 190,
    height: 190,
  },
  iphone1415Pro4Child: {
    top: 72,
    left: 110,
    width: 174,
    height: 174,
    position: "absolute",
  },
  jacobJones: {
    top: 262,
    left: 115,
    fontSize: 27,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
    height: 55,
    textAlign: "left",
    color: Color.colorGray_200,
    width: 164,
    position: "absolute",
  },
  heroiconspencil20Solid: {
    top: 269,
    left: 274,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415Pro4Item: {
    top: 329,
    position: "absolute",
  },
  iphone1415Pro4Inner: {
    top: 584,
    position: "absolute",
  },
  rectangleView: {
    top: 409,
    position: "absolute",
  },
  iphone1415Pro4Child1: {
    height: 64,
    width: 355,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xs,
    left: 18,
  },
  sbts: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_200,
    left: 39,
    height: 55,
    top: 512,
    position: "absolute",
    width: 164,
  },
  walletBalance507: {
    width: 229,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 39,
    height: 55,
  },
  recentActivity: {
    top: 347,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_200,
    left: 39,
    height: 55,
    width: 164,
    position: "absolute",
  },
  logOut: {
    top: 602,
    left: 157,
    width: 78,
    height: 28,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  tokens: {
    left: 103,
    width: 128,
    height: 43,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_200,
    top: 512,
    position: "absolute",
  },
  whatsappImage20240608At1: {
    left: 307,
    width: 66,
    height: 65,
  },
  ionwalletIcon: {
    left: 323,
    width: 34,
    height: 34,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  mingcutebackFill: {
    top: 48,
    width: 27,
    height: 27,
    left: 18,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.82%",
    width: "3.31%",
    top: "40.85%",
    right: "11.96%",
    bottom: "56.34%",
    left: "84.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    top: 681,
    left: 35,
    borderRadius: Border.br_lgi,
    width: 324,
    height: 61,
    backgroundColor: "transparent",
    position: "absolute",
  },
  becomeAPro: {
    top: 688,
    left: 70,
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.notoSansExtraBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  startingWithOnly: {
    top: 720,
    left: 89,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
  },
  ellipseIcon: {
    top: 222,
    left: 256,
    width: 13,
    height: 14,
    position: "absolute",
  },
  majesticonscamera: {
    top: 210,
    left: 245,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 779,
    left: 0,
    width: 397,
    height: 79,
    position: "absolute",
  },
  iphone1415Pro4: {
    backgroundColor: "#e1dbdb",
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro2;

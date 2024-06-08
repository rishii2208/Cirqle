import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415Pro4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415Pro6, styles.iconLayout]}>
      <Image
        style={[styles.iphone1415Pro6Child, styles.iphone1415Pro6ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={styles.jacobJones}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text style={[styles.jacobJones1, styles.jacobJones1Clr]}>
          Jacob Jones
        </Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.ionwalletIcon}
        contentFit="cover"
        source={require("../assets/ionwallet.png")}
      />
      <View style={[styles.iphone1415Pro6Inner, styles.innerPosition]}>
        <View style={styles.groupParent}>
          <View style={styles.groupParent}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.lineViewBorder]} />
              <Text style={styles.chooseYourInterests}>
                Choose your Interests!
              </Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
            <Image
              style={[styles.groupInner, styles.innerPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-56.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Image
              style={styles.vectorIcon3}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Image
              style={[styles.vectorIcon5, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Text style={[styles.robertFox, styles.aboutMeLayout]}>
              Robert Fox
            </Text>
            <Text
              style={[
                styles.companyMicrosoftExperience,
                styles.groupChildPosition,
              ]}
            >{`Company: Microsoft
Experience: 4 years`}</Text>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.aboutMe, styles.aboutMeTypo]}>About Me</Text>
            <Text style={[styles.imRobertFoxContainer, styles.jacobJones1Clr]}>
              <Text
                style={styles.imRobertFox}
              >{`I’m Robert Fox, and I have spent four years at Amazon. I am currently a Pro Level Mentor at `}</Text>
              <Text style={styles.cirqleTypo}>Cirqle</Text>
              <Text
                style={styles.imRobertFox}
              >{`. During my time on the platform, I have successfully guided 153 users, providing personalized advice and insights. My extensive experience and dedication help my mentees achieve their career goals.  `}</Text>
              <Text style={styles.seeMore}>+see more</Text>
            </Text>
            <Pressable
              style={[styles.mingcutebackFill, styles.mingcutebackFillLayout]}
              onPress={() => navigation.navigate("IPhone1415Pro3")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mingcutebackfill.png")}
              />
            </Pressable>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text
              style={[styles.text, styles.textTypo]}
            >{`                 `}</Text>
            <Text style={[styles.gfgfdfdfdfdfdfdff, styles.textTypo]}>
              gfgfdfdfdfdfdfdff
            </Text>
            <Image
              style={[styles.rectangleIcon, styles.rectangleLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <Text style={[styles.hours, styles.hoursTypo]}>100+ Hours</Text>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <Text style={[styles.kSbts, styles.hoursTypo]}>50K+ SBT’s</Text>
            <Image
              style={[
                styles.whatsappImage20240608At1,
                styles.iphone1415Pro6ChildLayout,
              ]}
              contentFit="cover"
              source={require("../assets/whatsapp-image-20240608-at-1640-11.png")}
            />
            <Image
              style={[styles.clockUndefinedGlyphUnd, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/clock--undefined--glyph-undefined.png")}
            />
            <LinearGradient
              style={styles.rectangleLineargradient}
              locations={[0, 1]}
              colors={["rgba(121, 215, 255, 0.75)", "rgba(82, 64, 192, 0.75)"]}
            />
            <Text style={[styles.bookAnSession, styles.aboutMeTypo]}>
              Book an Session for 1 TON
            </Text>
          </View>
          <Image
            style={[styles.vectordefaultIcon, styles.mingcutebackFillLayout]}
            contentFit="cover"
            source={require("../assets/vectordefault.png")}
          />
        </View>
      </View>
      <Image
        style={styles.iphone1415Pro6Item}
        contentFit="cover"
        source={require("../assets/group-161.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iphone1415Pro6ChildLayout: {
    width: 51,
    position: "absolute",
  },
  jacobJones1Clr: {
    color: Color.colorGray_200,
    textAlign: "left",
  },
  innerPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: 400,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 350,
    top: 0,
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "49.61%",
    width: "4.07%",
    height: "1.78%",
    top: "48.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutMeLayout: {
    height: 50,
    width: 189,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_200,
  },
  rectangleLayout: {
    width: 366,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  aboutMeTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  mingcutebackFillLayout: {
    height: 27,
    position: "absolute",
  },
  frameIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  hoursTypo: {
    fontSize: FontSize.size_4xl,
    top: 752,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  iphone1415Pro6Child: {
    top: 32,
    left: 28,
    height: 51,
  },
  jacobJones1: {
    width: 121,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
  },
  jacobJones: {
    left: 94,
    top: 43,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.76%",
    width: "2.04%",
    top: "5.87%",
    right: "45.29%",
    bottom: "92.37%",
    left: "52.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ionwalletIcon: {
    top: 38,
    left: 338,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: 8,
    width: 379,
    height: 59,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  groupItem: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorDimgray,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    height: 45,
    width: 350,
    top: 0,
    left: 0,
    borderStyle: "solid",
  },
  chooseYourInterests: {
    top: 13,
    left: 45,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_500,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
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
  rectangleGroup: {
    left: 22,
    position: "absolute",
  },
  groupInner: {
    height: 327,
    top: 61,
  },
  vectorIcon2: {
    right: "75.57%",
    left: "20.36%",
  },
  vectorIcon3: {
    height: "1.79%",
    width: "4.33%",
    right: "80.92%",
    bottom: "49.6%",
    left: "14.76%",
    top: "48.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    right: "86.51%",
    left: "9.41%",
  },
  vectorIcon5: {
    right: "91.86%",
    left: "4.07%",
  },
  robertFox: {
    top: 394,
    left: 16,
    fontSize: 28,
    textAlign: "left",
    position: "absolute",
  },
  companyMicrosoftExperience: {
    left: 210,
    width: 176,
    height: 73,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_lg,
  },
  rectangleView: {
    top: 471,
    left: 15,
    height: 222,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  aboutMe: {
    top: 477,
    left: 27,
    height: 50,
    width: 189,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_200,
  },
  imRobertFox: {
    fontFamily: FontFamily.notoSansRegular,
  },
  cirqleTypo: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  seeMore: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
  },
  imRobertFoxContainer: {
    top: 508,
    left: 29,
    fontSize: FontSize.size_base,
    width: 343,
    height: 173,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  mingcutebackFill: {
    left: 14,
    top: 66,
    width: 27,
  },
  frameIcon: {
    top: 403,
    left: 170,
  },
  text: {
    left: 279,
    width: 102,
    height: 416,
    top: 61,
  },
  gfgfdfdfdfdfdfdff: {
    top: 759,
    left: 85,
  },
  rectangleIcon: {
    top: 717,
    left: 18,
    height: 97,
  },
  hours: {
    left: 38,
  },
  lineView: {
    top: 730,
    left: 200,
    borderColor: Color.colorGray_200,
    borderRightWidth: 2,
    width: 2,
    height: 71,
  },
  kSbts: {
    left: 215,
  },
  whatsappImage20240608At1: {
    top: 741,
    left: 329,
    height: 49,
  },
  clockUndefinedGlyphUnd: {
    top: 756,
    left: 172,
  },
  rectangleLineargradient: {
    top: 836,
    left: 32,
    borderRadius: Border.br_lgi,
    width: 324,
    height: 61,
    backgroundColor: "transparent",
    position: "absolute",
  },
  bookAnSession: {
    top: 853,
    left: 69,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.notoSansRegular,
  },
  groupParent: {
    height: 897,
    top: 0,
    width: 393,
    left: 0,
    position: "absolute",
  },
  vectordefaultIcon: {
    top: 352,
    left: 352,
    width: 29,
  },
  iphone1415Pro6Inner: {
    top: 89,
    height: 763,
  },
  iphone1415Pro6Item: {
    top: 778,
    left: -3,
    width: 397,
    height: 79,
    position: "absolute",
  },
  iphone1415Pro6: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro4;

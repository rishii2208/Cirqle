import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1415Pro = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415Pro2}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.chooseYourInterests, styles.aiTypo]}>
          Choose your Interests!
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.iphone1415Pro2Child, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415Pro2Item, styles.iphone1415Layout]} />
      <View
        style={[styles.iphone1415Pro2Inner, styles.iphone1415ChildLayout3]}
      />
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout3]} />
      <View
        style={[styles.iphone1415Pro2Child1, styles.iphone1415ChildLayout3]}
      />
      <View
        style={[styles.iphone1415Pro2Child2, styles.iphone1415ChildLayout3]}
      />
      <View
        style={[styles.iphone1415Pro2Child3, styles.iphone1415ChildLayout3]}
      />
      <View
        style={[styles.iphone1415Pro2Child4, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child5, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child6, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child7, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child8, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child9, styles.iphone1415ChildLayout2]}
      />
      <View
        style={[styles.iphone1415Pro2Child10, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child11, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child12, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child13, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child14, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child15, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro2Child16, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro2Child17, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro2Child18, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro2Child19, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro2Child20, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro2Child21, styles.iphone1415ChildLayout]}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={styles.jacobJones}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Text style={styles.jacobJones1}>Jacob Jones</Text>
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone1415Pro2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Image
        style={styles.ionwalletIcon}
        contentFit="cover"
        source={require("../assets/ionwallet.png")}
      />
      <Pressable
        style={[styles.web3, styles.aiPosition]}
        onPress={() => navigation.navigate("IPhone1415Pro1")}
      >
        <Text style={[styles.web31, styles.aiTypo]}>Web3</Text>
      </Pressable>
      <Text style={[styles.ai, styles.aiPosition]}>AI</Text>
      <Text style={[styles.ml, styles.aiPosition]}>ML</Text>
      <Text style={[styles.devops, styles.aiPosition]}>DevOps</Text>
      <Text style={[styles.mlops, styles.mlopsTypo]}>MLOps</Text>
      <Text style={[styles.python, styles.mlopsTypo]}>Python</Text>
      <Text style={[styles.science, styles.mlopsTypo]}>Science</Text>
      <Text style={[styles.startup, styles.mlopsTypo]}>StartUp</Text>
      <Text style={[styles.uiux, styles.aiTypo]}>UI/UX</Text>
      <Text style={[styles.humor, styles.humorTypo]}>Humor</Text>
      <Text style={[styles.flutter, styles.humorTypo]}>Flutter</Text>
      <Text style={[styles.android, styles.humorTypo]}>Android</Text>
      <Text style={[styles.defi, styles.aiTypo]}>DeFi</Text>
      <Text style={[styles.fitness, styles.aiTypo]}>Fitness</Text>
      <Text style={[styles.android1, styles.aiTypo]}>Android</Text>
      <Text style={[styles.react, styles.gitTypo]}>React</Text>
      <Text style={[styles.aws, styles.aiTypo]}>AWS</Text>
      <Text style={[styles.nlp, styles.aiTypo]}>NLP</Text>
      <Text style={[styles.history, styles.nodejsTypo]}>History</Text>
      <Text style={[styles.nodejs, styles.nodejsTypo]}>Node.JS</Text>
      <Text style={[styles.express, styles.aiTypo]}>Express</Text>
      <Text style={[styles.git, styles.gitTypo]}>Git</Text>
      <Text style={[styles.books, styles.booksTypo]}>Books</Text>
      <Text style={[styles.health, styles.booksTypo]}>Health</Text>
      <View style={styles.rectangle} />
      <Text style={[styles.addNew, styles.aiTypo]}>Add New</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-17.png")}
      />
      <Text style={[styles.text, styles.aiTypo]}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aiTypo: {
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone1415Layout: {
    height: 37,
    width: 88,
    borderWidth: 2,
    borderColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_mini,
    left: 12,
    top: 177,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone1415ChildLayout3: {
    height: 33,
    width: 84,
    left: 14,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iphone1415ChildLayout2: {
    left: 105,
    height: 33,
    width: 84,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iphone1415ChildLayout1: {
    left: 197,
    height: 33,
    width: 84,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    left: 288,
    height: 33,
    width: 84,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  aiPosition: {
    top: 186,
    position: "absolute",
  },
  mlopsTypo: {
    top: 245,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  humorTypo: {
    top: 304,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  gitTypo: {
    top: 363,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  nodejsTypo: {
    left: 213,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  booksTypo: {
    left: 306,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorDimgray,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    borderStyle: "solid",
    height: 45,
    width: 350,
    position: "absolute",
  },
  chooseYourInterests: {
    top: 12,
    left: 48,
    color: Color.colorGray_500,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -8.5,
    width: "5.14%",
    top: "50%",
    right: "91.14%",
    left: "3.71%",
    height: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: 103,
    left: 18,
    height: 45,
    width: 350,
    position: "absolute",
  },
  iphone1415Pro2Child: {
    backgroundColor: "rgba(36, 161, 222, 0.25)",
  },
  iphone1415Pro2Item: {
    backgroundColor: "rgba(36, 161, 222, 0.2)",
  },
  iphone1415Pro2Inner: {
    top: 239,
  },
  rectangleView: {
    top: 297,
  },
  iphone1415Pro2Child1: {
    top: 358,
  },
  iphone1415Pro2Child2: {
    top: 416,
  },
  iphone1415Pro2Child3: {
    top: 482,
  },
  iphone1415Pro2Child4: {
    top: 179,
  },
  iphone1415Pro2Child5: {
    top: 239,
  },
  iphone1415Pro2Child6: {
    top: 297,
  },
  iphone1415Pro2Child7: {
    top: 358,
  },
  iphone1415Pro2Child8: {
    top: 416,
  },
  iphone1415Pro2Child9: {
    top: 482,
  },
  iphone1415Pro2Child10: {
    top: 179,
  },
  iphone1415Pro2Child11: {
    top: 239,
  },
  iphone1415Pro2Child12: {
    top: 297,
  },
  iphone1415Pro2Child13: {
    top: 358,
  },
  iphone1415Pro2Child14: {
    top: 416,
  },
  iphone1415Pro2Child15: {
    top: 482,
  },
  iphone1415Pro2Child16: {
    top: 179,
  },
  iphone1415Pro2Child17: {
    top: 239,
  },
  iphone1415Pro2Child18: {
    top: 297,
  },
  iphone1415Pro2Child19: {
    top: 358,
  },
  iphone1415Pro2Child20: {
    top: 416,
  },
  iphone1415Pro2Child21: {
    top: 482,
  },
  ellipseIcon: {
    top: 39,
    left: 24,
    width: 51,
    height: 51,
    position: "absolute",
  },
  jacobJones1: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
    width: 121,
    height: 28,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  jacobJones: {
    left: 90,
    top: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  vector: {
    left: "51.65%",
    top: "6.69%",
    right: "46.31%",
    bottom: "91.55%",
    width: "2.04%",
    height: "1.76%",
    position: "absolute",
  },
  ionwalletIcon: {
    top: 52,
    left: 334,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  web31: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
  },
  web3: {
    left: 37,
  },
  ai: {
    left: 139,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
  },
  ml: {
    left: 225,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
  },
  devops: {
    left: 300,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_mini,
  },
  mlops: {
    left: 32,
    color: Color.colorGray_100,
  },
  python: {
    left: 121,
    color: Color.colorGray_200,
  },
  science: {
    left: 209,
    color: Color.colorGray_200,
  },
  startup: {
    left: 301,
    color: Color.colorGray_200,
  },
  uiux: {
    top: 305,
    left: 35,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  humor: {
    left: 122,
  },
  flutter: {
    left: 215,
  },
  android: {
    left: 299,
  },
  defi: {
    left: 40,
    top: 364,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  fitness: {
    left: 33,
    top: 421,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  android1: {
    left: 28,
    top: 489,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  react: {
    left: 126,
  },
  aws: {
    left: 132,
    top: 423,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  nlp: {
    top: 490,
    left: 131,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  history: {
    top: 364,
  },
  nodejs: {
    top: 423,
  },
  express: {
    left: 211,
    top: 489,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansRegular,
    position: "absolute",
  },
  git: {
    left: 319,
  },
  books: {
    top: 421,
  },
  health: {
    top: 489,
  },
  rectangle: {
    top: 593,
    left: 147,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 100,
    height: 100,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  addNew: {
    top: 653,
    left: 156,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    top: 777,
    left: -4,
    width: 397,
    height: 79,
    position: "absolute",
  },
  text: {
    top: 604,
    left: 188,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Pro2: {
    backgroundColor: "#edf0f3",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415Pro;

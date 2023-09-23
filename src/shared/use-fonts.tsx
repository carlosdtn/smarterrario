import Font from "expo-font";

export default async function useFont() {
  await Font.loadAsync({
    MontserratVariable: require("../../assets/fonts/MontserratVariable.ttf"),
    SahityaBold: require("../../assets/fonts/SahityaBold.ttf"),
    SahityaRegular: require("../../assets/fonts/SahityaRegular.ttf"),
  });
}

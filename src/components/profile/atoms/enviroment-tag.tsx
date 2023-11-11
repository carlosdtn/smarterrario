import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AnimalType } from "../../../utils/types";
import IconReptile from "../../icons/reptile/reptile";
import IconRodent from "../../icons/rodent/rodent";
import IconArachnid from "../../icons/arachnid/arachnid";

interface EnviromentTagProps {
  animalType: AnimalType;
  tagStyles?: {
    [key: string]: string | number;
  };
}

export default function EnviromentTag({
  animalType,
  tagStyles,
}: EnviromentTagProps) {
  const getIcon = {
    [AnimalType.Rondent]: <IconRodent width="20" height="20" color="black" />,
    [AnimalType.Reptile]: <IconReptile width="20" height="20" color="black" />,
    [AnimalType.Arachnid]: (
      <IconArachnid width="20" height="20" color="black" />
    ),
  };

  return (
    <View style={[styles.enviromentTag, tagStyles]}>
      {getIcon[animalType]}
      <Text style={styles.enviromentTagTitle}>{animalType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  enviromentTag: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  enviromentTagTitle: {
    color: "black",
    fontWeight: "bold",
  },
});

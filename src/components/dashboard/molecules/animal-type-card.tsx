import React, { useContext } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { AnimalType } from "../../../utils/types";
import IconArachnid from "../../icons/arachnid/arachnid";
import IconReptile from "../../icons/reptile/reptile";
import IconRodent from "../../icons/rodent/rodent";
import { CategoryContext } from "../../../context/category-context";

export default function AnimalTypeCard({
  animalType,
  onPress,
  selectedCard,
}: {
  animalType: AnimalType;
  onPress?: (event: GestureResponderEvent) => void;
  selectedCard?: number;
}) {
  const { index } = useContext(CategoryContext);

  const getIcon = {
    [AnimalType.Rondent]: (
      <IconRodent
        width="20"
        height="20"
        color={selectedCard === index ? "white" : "black"}
      />
    ),
    [AnimalType.Reptile]: (
      <IconReptile
        width="20"
        height="20"
        color={selectedCard === index ? "white" : "black"}
      />
    ),
    [AnimalType.Arachnid]: (
      <IconArachnid
        width="20"
        height="20"
        color={selectedCard === index ? "white" : "black"}
      />
    ),
  };

  const selectedStyle = {
    backgroundColor: "#0BA360",
    borderColor: "#0BA360",
  };

  return (
    <TouchableOpacity
      style={[styles.container, selectedCard === index ? selectedStyle : {}]}
      onPress={onPress}
    >
      {getIcon[animalType]}
      <Text
        style={{
          color: selectedCard === index ? "white" : "black",
          fontWeight: "bold",
        }}
      >
        {animalType}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexGrow: 1,
    paddingVertical: 20,
    gap: 10,
    justifyContent: "center",
  },
});

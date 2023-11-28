import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Animal, AnimalType } from "../../../utils/types";
import EnviromentTag from "../../profile/atoms/enviroment-tag";

interface AnimalSummarySectionProps {
  animal: Animal | undefined;
}

export default function AnimalSummarySection({
  animal,
}: AnimalSummarySectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatarImage}
          source={
            animal?.photo
              ? { uri: animal.photo }
              : require("../../../../assets/environment-placeholder.png")
          }
        />
        <EnviromentTag
          tagStyles={styles.tagStyles}
          animalType={animal?.animalType || AnimalType.Reptile}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{animal?.title}</Text>

        <Text style={styles.description}>{animal?.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    width: "90%",
    borderWidth: 1,
    borderBottomColor: "gray",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    paddingBottom: 15,
  },
  avatarImage: {
    width: 180,
    height: 150,
    borderRadius: 10,
  },
  avatarContainer: {
    borderWidth: 1,
    position: "relative",
    borderColor: "gray",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#717171",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "40%",
  },
  description: {
    color: "#717171",
    textAlign: "justify",
  },
  tagStyles: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});

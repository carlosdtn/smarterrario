import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Animal } from "../../../utils/types";
import IconPencil from "../../icons/pencil/pencil";
import Button from "../../ui/button";
import EnviromentTag from "../atoms/enviroment-tag";

interface EnvironmentCardProps {
  animal: Animal;
  isEditable?: boolean;
  cardStyle?: {
    [key: string]: string | number;
  };
  navigation?: any;
}

export default function EnvironmentCard({
  animal,
  cardStyle,
  navigation,
}: EnvironmentCardProps) {
  const handleGoToEdit = () => {
    navigation.push("EditEnvironment", { environmentID: animal?.id });
  };
  return (
    <View style={[styles.environmentCard, cardStyle]}>
      <View style={styles.environmentCardTop}>
        <EnviromentTag animalType={animal.animalType} />
        <Button
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderWidth: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          onPress={handleGoToEdit}
        >
          <IconPencil width="26" height="26" color="white" />
        </Button>
      </View>
      <View style={styles.environmentCardInfo}>
        <Text style={styles.environmentCardTitle}>{animal.title}</Text>
        <Text style={styles.environmentCardDescription}>
          {animal.description.length > 100
            ? `${animal.description.substring(0, 100)}...`
            : animal.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  environmentCard: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    height: "auto",
    borderColor: "gray",
    paddingHorizontal: 10,
    backgroundColor: "#4D6158",
    paddingVertical: 10,
    minHeight: 130,
  },
  environmentCardTop: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  environmentCardTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  environmentCardDescription: {
    color: "white",
  },

  environmentCardInfo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

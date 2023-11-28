import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CompactEnvironmentCardProps {
  animal: {
    id: string;
    name: string;
    photo: string;
  };
  cardStyle?: { [key: string]: string | number };
  navigation?: {
    navigate: (
      screen: string,
      params?: { [key: string]: number | string }
    ) => void;
  };
}

export default function CompactEnvironmentCard({
  animal,
  cardStyle,
  navigation,
}: CompactEnvironmentCardProps) {
  const handleSelectAnimal = () => {
    if (!navigation) return;
    navigation.navigate("EnvironmentDetail", { id: animal.id });
  };

  return (
    <TouchableOpacity
      style={[styles.container, cardStyle]}
      onPress={handleSelectAnimal}
    >
      <Image
        style={styles.animalImage}
        source={
          animal.photo
            ? { uri: animal.photo }
            : require("../../../../assets/environment-placeholder.png")
        }
      />
      <Text style={styles.title}>{animal.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C1C1C1",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 5,
    justifyContent: "center",
    width: 280,
    height: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#717171",
    textAlign: "center",
  },
  animalImage: {
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
});

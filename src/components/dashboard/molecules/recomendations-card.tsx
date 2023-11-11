import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface RecomendationsCardProps {
  recomendations: {
    title: string;
    description: string;
  };
}

export default function RecomendationsCard({
  recomendations,
}: RecomendationsCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recomendations.title}</Text>
      <Text style={styles.description}>{recomendations.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 5,
    justifyContent: "center",
    width: 280,
    height: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "gray",
  },
});

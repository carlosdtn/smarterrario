import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface SensorDetailCardProps {
  title: string;
  value: string;
}

export default function SensorDetailCard({
  title,
  value,
}: SensorDetailCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 5,
    justifyContent: "center",
    width: 180,
    height: "auto",
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  value: {
    color: "gray",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
});

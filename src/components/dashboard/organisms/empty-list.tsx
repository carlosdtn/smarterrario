import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconEmptyMood from "../../icons/empty-mood/empty-mood";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <IconEmptyMood width={100} height={100} color="#717171" />
      <Text style={styles.text}>
        Aún no se registraron animales en este entorno
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "97%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    flexDirection: "column",
    gap: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#717171",
    borderRadius: 20,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    opacity: 0.7,
  },
  text: {
    color: "#717171",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

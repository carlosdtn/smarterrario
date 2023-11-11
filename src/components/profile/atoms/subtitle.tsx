import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

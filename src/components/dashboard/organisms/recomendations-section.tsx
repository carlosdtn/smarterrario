import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Subtitle from "../../profile/atoms/subtitle";
import RecomendationsCard from "../molecules/recomendations-card";

interface RecomendationsCardProps {
  recomendations: {
    title: string;
    description: string;
  }[];
}

export default function RecomendationsSection({
  recomendations,
}: RecomendationsCardProps) {
  return (
    <>
      <View
        style={{
          display: "flex",
          width: "90%",
        }}
      >
        <Subtitle>Recomendaciones</Subtitle>
      </View>
      <View style={styles.recomendationsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recomendationsCard}>
            {recomendations.map((item, index) => (
              <RecomendationsCard key={index} recomendations={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  recomendationsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    marginTop: 8,
  },
  recomendationsCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
  },
});

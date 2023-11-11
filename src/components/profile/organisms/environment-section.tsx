import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Subtitle from "../atoms/subtitle";
import EnvironmentCard from "../molecules/environment-card";
import { Animal } from "../../../utils/types";

interface EnviromentCardProps {
  animals: Animal[];
}

export default function EnviromentSection({ animals }: EnviromentCardProps) {
  return (
    <>
      <View style={styles.enviromentSection}>
        <Subtitle>Configuración de Entornos</Subtitle>
      </View>
      <View style={styles.enviromentSectionCardContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.enviromentSectionCards}>
            {animals.map((animal, index) => (
              <EnvironmentCard key={index} animal={animal} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  enviromentSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    width: "90%",
  },
  enviromentSectionCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    marginTop: 8,
  },

  enviromentSectionCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
});

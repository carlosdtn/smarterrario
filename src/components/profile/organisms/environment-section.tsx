import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Subtitle from "../atoms/subtitle";
import EnvironmentCard from "../molecules/environment-card";
import { Animal } from "../../../utils/types";
import EmptyEnvironments from "../molecules/empty-environments";

interface EnviromentCardProps {
  navigation: any;
  animals: Animal[] | null;
}

export default function EnviromentSection({
  navigation,
  animals,
}: EnviromentCardProps) {
  const emptyEnvironments = !animals || animals.length === 0;

  return (
    <>
      <View style={styles.enviromentSection}>
        <Subtitle>Configuración de Entornos</Subtitle>
      </View>
      <View style={styles.enviromentSectionCardContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.enviromentSectionCards}>
            {!emptyEnvironments ? (
              animals?.map((animal) => (
                <EnvironmentCard
                  key={animal.id}
                  animal={animal}
                  navigation={navigation}
                  cardStyle={{ width: 200, margin: 5, height: "auto" }}
                />
              ))
            ) : (
              <EmptyEnvironments />
            )}
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
    gap: 2,
    paddingHorizontal: 15,
  },
});

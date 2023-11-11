import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import AnimalSummarySection from "../../../components/environment-detail/organism/animal-summary-section";
import EnvironmentDetailSection from "../../../components/environment-detail/organism/environment-detail-section";
import OptionsSection from "../../../components/environment-detail/organism/options-section";
import { ANIMALS_MOCK, CHARTDATA_MOCK, SENSORDATA_MOCK } from "../utils/mocks";
import { RootStackParamList } from "../utils/types";

type EnviromentDetailProps = StackNavigationProp<
  RootStackParamList,
  "EnvironmentDetail"
>;

export default function EnvironmentDetail(props: {
  navigation: EnviromentDetailProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const { id } = props.route.params;
  const getAnimalById = (id: string) => {
    return ANIMALS_MOCK.find((animal) => animal.id === Number(id));
  };

  const animal = getAnimalById(id);

  return (
    <View style={styles.container}>
      {/* Resumen */}
      <AnimalSummarySection animal={animal} />
      {/* Opciones */}
      <OptionsSection />
      {/* Detalles de sensores */}
      <EnvironmentDetailSection
        chartData={CHARTDATA_MOCK}
        sensorData={SENSORDATA_MOCK}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F3F3",
    paddingTop: 20,
  },
});

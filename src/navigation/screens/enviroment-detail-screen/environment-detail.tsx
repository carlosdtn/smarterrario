import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ChartData } from "react-native-chart-kit/dist/HelperTypes";
import { useSelector } from "react-redux";
import AnimalSummarySection from "../../../components/environment-detail/organism/animal-summary-section";
import EnvironmentDetailSection from "../../../components/environment-detail/organism/environment-detail-section";
import OptionsSection from "../../../components/environment-detail/organism/options-section";
import ThingSpeakService from "../../../services/thingspeak/thingspeak-service";
import { formatChartData, formatSensorData } from "../../../utils/helpers";
import { Animal, Sensor } from "../../../utils/types";
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
  const animals = useSelector(
    (state: { environment: { environment: Animal[] } }) =>
      state.environment.environment
  );
  const { id } = props.route.params;

  const getAnimalById = (id: string) => {
    return animals?.find((animal) => animal.id === id);
  };
  const animal = getAnimalById(id);

  const ts = new ThingSpeakService();

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [sensorData, setSensorData] = useState<Sensor[] | null>(null);

  const getChartData = async () => {
    if (!animal) return null;
    const data = await ts.fetchAllFieldData(animal.channel, animal.apiKey, 4);
    const chart = formatChartData(data);
    const sensors = formatSensorData(data.feeds);
    setChartData(chart);
    setSensorData(sensors);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Resumen */}
      <AnimalSummarySection animal={animal} />
      {/* Opciones */}
      <OptionsSection navigation={props.navigation} environmentID={id} />
      {/* Detalles de sensores */}
      <EnvironmentDetailSection chartData={chartData} sensorData={sensorData} />
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

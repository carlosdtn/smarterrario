import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import Subtitle from "../../profile/atoms/subtitle";
import { LineChart } from "react-native-chart-kit";
import SensorDetailCard from "../molecules/sensor-detail-card";
import { ChartData, Sensor } from "../../../utils/types";
import EmptyChart from "../molecules/empty-chart";
import EmptySensorCard from "../molecules/empty-sensor-card";

interface EnvironmentDetailSectionProps {
  chartData: ChartData | null;
  sensorData: Sensor[] | null;
}

export default function EnvironmentDetailSection({
  chartData,
  sensorData,
}: EnvironmentDetailSectionProps) {
  return (
    <>
      <View style={styles.container}>
        <Subtitle>Historial de Temperatura</Subtitle>
        <View style={styles.detailsContainer}>
          {chartData === null ? (
            <EmptyChart />
          ) : (
            <LineChart
              data={chartData}
              width={350}
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={styles.chartConfig}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          )}
          <Subtitle>Datos de Sensores</Subtitle>
        </View>
      </View>
      <View style={styles.sensorDetails}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sensorContainer}>
            {sensorData === null ? (
              <EmptySensorCard />
            ) : (
              sensorData?.map((sensor) => (
                <SensorDetailCard
                  key={sensor.title}
                  title={sensor.title}
                  value={sensor.value}
                />
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "90%",
  },
  detailsContainer: { display: "flex", flexDirection: "column", gap: 15 },
  chartConfig: {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  },
  sensorDetails: { display: "flex", width: "100%", flexDirection: "row" },
  sensorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 19,
  },
});

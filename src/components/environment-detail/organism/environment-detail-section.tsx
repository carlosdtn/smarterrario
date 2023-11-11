import { View, StyleSheet } from "react-native";
import React from "react";
import Subtitle from "../../profile/atoms/subtitle";
import { LineChart } from "react-native-chart-kit";
import SensorDetailCard from "../molecules/sensor-detail-card";

interface EnvironmentDetailSectionProps {
  chartData: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
  sensorData: {
    title: string;
    value: number;
  }[];
}

export default function EnvironmentDetailSection({
  chartData,
  sensorData,
}: EnvironmentDetailSectionProps) {
  return (
    <View style={styles.container}>
      <Subtitle>Datos de sensores</Subtitle>
      <View style={styles.detailsContainer}>
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
        <View style={styles.sensorDetails}>
          {sensorData.map((sensor, index) => {
            return (
              <SensorDetailCard
                key={index}
                title={sensor.title}
                value={sensor.value}
              />
            );
          })}
        </View>
      </View>
    </View>
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
  sensorDetails: { display: "flex", flexDirection: "row", gap: 10 },
});

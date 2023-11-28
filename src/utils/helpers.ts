import { Feed, Sensor, ThingSpeakResponse } from "./types";

export const sensorType: {
  [key: string]: string;
} = {
  field1: "Humedad (%)",
  field2: "Temperatura (°C)",
  field3: "Humedad de suelo (%)",
  field4: "Movimiento (1/0)",
};

export const formatSensorData = (feeds: Feed[] | undefined) => {
  if (feeds !== undefined) {
    const sensors: Sensor[] = [];
    const lastMeasurement: Feed[] = feeds.slice(-1);
    Object.keys(lastMeasurement[0]).forEach((key) => {
      if (sensorType[key]) {
        const value = parseFloat(
          lastMeasurement[0][key as keyof Feed] as string
        );
        const roundedValue = Math.round(value * 10) / 10;
        sensors.push({
          title: sensorType[key],
          value: String(roundedValue),
        });
      }
    });
    return sensors;
  } else {
    return null;
  }
};

export const formatChartData = (data: ThingSpeakResponse | -1 | undefined) => {
  if (data !== -1 && data !== undefined) {
    if (!data.error) {
      const labels: string[] = [];
      const datasets: { data: number[] }[] = [
        {
          data: [],
        },
      ];
      data.feeds.forEach((feed) => {
        const createdAt = new Date(feed.created_at);
        const formattedDate = `${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;
        labels.push(formattedDate);
        datasets[0].data.push(Number(feed.field2));
      });
      return {
        labels,
        datasets,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};

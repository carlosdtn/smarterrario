import { StyleSheet, Text, View } from "react-native";

export default function EmptySensorCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay datos para mostrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    flexDirection: "column",
    gap: 10,
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

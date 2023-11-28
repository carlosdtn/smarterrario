import { View, Text, StyleSheet } from "react-native";

export default function EmptyChart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay datos para mostrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "97%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    flexDirection: "column",
    gap: 20,
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

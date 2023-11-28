import { View, Text, StyleSheet } from "react-native";
import IconEmptyMood from "../../icons/empty-mood/empty-mood";

const EmptyEnvironments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay entornos registrados...</Text>
      <IconEmptyMood width={60} height={60} color="#717171" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#717171",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    opacity: 0.7,
  },
  text: {
    color: "#717171",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EmptyEnvironments;

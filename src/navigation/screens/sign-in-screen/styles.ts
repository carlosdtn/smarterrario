import { StyleSheet } from "react-native";

export default StyleSheet.create({
  brandContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    gap: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0BA360",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#747474",
  },
  groupInput: {
    display: "flex",
    justifyContent: "center",
    gap: 4,
    width: "85%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  authText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  groupedText: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  brandContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    gap: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0BA360",
  },
  slogan: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#747474",
  },
  authOptions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  authText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  groupedText: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "60%",
    gap: 4,
  },
});

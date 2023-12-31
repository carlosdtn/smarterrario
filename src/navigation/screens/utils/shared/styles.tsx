import { StyleSheet } from "react-native";

export const EnvFormStyles = StyleSheet.create({
  generalSection: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  form: {
    paddingTop: 20,
    display: "flex",
    width: "90%",
    flexDirection: "column",
    marginHorizontal: "5%",
    flex: 1,
  },
  groupInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    width: "100%",
  },
  inputProfile: {
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "gray",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "black",
    paddingVertical: 2,
  },
  labelProfile: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  avatarContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 100,
    width: "auto",
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    position: "relative",
  },
  avatarImageEdit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0BA360",
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

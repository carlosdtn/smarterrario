import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "../../ui/button";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import Toast from "react-native-toast-message";
import IconLogout from "../../icons/logout/logout";
import IconUser from "../../icons/user/user";
import { User } from "../../../utils/types";
import IconAdd from "../../icons/add/add";

interface AccountSectionProps {
  navigation: any;
  user: Pick<User, "name" | "location" | "photo">;
}

export default function AccountSection({
  navigation,
  user,
}: AccountSectionProps) {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
    Toast.show({
      type: "success",
      text1: "Estado de la sesión",
      text2: "Sesión cerrada correctamente",
    });
  };
  const goToScreen = (screen: string) => {
    navigation.push(screen);
  };

  return (
    <View style={styles.userOptionsContainer}>
      <View style={styles.userDataContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImage}
            source={{
              uri: user.photo,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.location}>
            {user.location ? user.location : "Sin ubicación"}
          </Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Button
          variant="ghost"
          style={{ backgroundColor: "#D2D2D2" }}
          onPress={() => goToScreen("RegisterEnvironment")}
        >
          <IconAdd key="1" width={20} height={20} color="#686868" />
        </Button>
        <Button
          variant="ghost"
          style={{ backgroundColor: "#D2D2D2" }}
          onPress={() => goToScreen("Profile")}
        >
          <IconUser key="2" width={20} height={20} color="#686868" />
        </Button>
        <Button
          variant="ghost"
          style={{ backgroundColor: "#EBADAD" }}
          onPress={handleLogout}
        >
          <IconLogout width={20} height={20} color="#BB3232" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: "white",
  },
  userOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: "#686868",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    justifyContent: "space-between",
    paddingBottom: 10,
    width: "90%",
  },
  userDataContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  avatarContainer: {
    display: "flex",
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
  },
});

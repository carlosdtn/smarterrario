import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet } from "react-native";
import Logo from "../../components/icons/logo/logo";
import Button from "../../components/ui/button";
import Anchor from "../../components/ui/anchor";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <View style={styles.brandContainer}>
        <Logo />
        <Text style={styles.title}>SmartErrario</Text>
        <Text style={styles.slogan}>
          La tecnología que protege a los animales
        </Text>
      </View>
      <View style={styles.authOptions}>
        <Button>Crear una cuenta</Button>
        <View style={styles.groupedText}>
          <Text style={styles.authText}>¿Ya tienes una cuenta?</Text>
          <Anchor>Inicia Sesión</Anchor>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

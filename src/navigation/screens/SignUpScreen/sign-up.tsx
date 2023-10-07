import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../components/icons/logo/logo";
import Anchor from "../../../components/ui/anchor";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import styles from "./styles";
import { RootStackParamList } from "../utils/types";

type SignUpProps = StackNavigationProp<RootStackParamList, "SignUp">;

export default function SignUpScreen(props: {
  navigation: SignUpProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const goToSignIn = () => {
    props.navigation.push("SignIn");
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.brandContainer}>
        <Logo width="70" height="70" />
        <Text style={styles.title}>SmartErrario</Text>
        <Text style={styles.subtitle}>CREA UNA CUENTA</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.groupInput}>
          <Input placeholder="Juan Perez" label="Nombres" />
          <Input placeholder="jperez@gmail.com" label="Correo electrónico" />
          <Input placeholder="Escribe una contraseña..." label="Contraseña" />
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button style={{ width: "85%" }}>Crear una cuenta</Button>
          <View style={styles.groupedText}>
            <Text style={styles.authText}>¿Ya tienes una cuenta?</Text>
            <Anchor onPress={goToSignIn}>Inicia Sesión</Anchor>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

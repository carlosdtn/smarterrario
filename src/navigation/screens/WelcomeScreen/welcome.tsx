import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../components/icons/logo/logo";
import Anchor from "../../../components/ui/anchor";
import Button from "../../../components/ui/button";
import { RootStackParamList } from "../utils/types";
import styles from "./styles";

type WelcomeScreenProps = StackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen(props: {
  navigation: WelcomeScreenProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const goToSignUp = () => {
    props.navigation.push("SignUp");
  };

  const goToSignIn = () => {
    props.navigation.push("SignIn");
  };

  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <View style={styles.brandContainer}>
        <Logo />
        <Text style={styles.title}>SmarTerrario</Text>
        <Text style={styles.slogan}>
          La tecnología que protege a los animales
        </Text>
      </View>
      <View style={styles.authOptions}>
        <Button onPress={goToSignUp} style={{ width: "80%" }}>
          Crear una cuenta
        </Button>
        <View style={styles.groupedText}>
          <Text style={styles.authText}>¿Ya tienes una cuenta?</Text>
          <Anchor onPress={goToSignIn}>Inicia Sesión</Anchor>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../components/icons/logo/logo";
import Anchor from "../../../components/ui/anchor";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import { RootStackParamList } from "../utils/types";
import styles from "./styles";
import { useForm } from "react-hook-form";

type SignInProps = StackNavigationProp<RootStackParamList, "SignIn">;
type SignInData = {
  name: string;
  email: string;
  password: string;
};

export default function SignIn(props: {
  navigation: SignInProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInData>();
  const goToSignUp = () => {
    props.navigation.push("SignUp");
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.brandContainer}>
        <Logo width="70" height="70" />
        <Text style={styles.title}>SmartErrario</Text>
        <Text style={styles.subtitle}>INICIA SESIÓN</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.groupInput}>
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
          <Button style={{ width: "85%" }}>Iniciar sesión</Button>
          <View>
            <View style={styles.groupedText}>
              <Text style={styles.authText}>¿Aún no tienes una cuenta?</Text>
              <Anchor onPress={goToSignUp}>Crea una cuenta</Anchor>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

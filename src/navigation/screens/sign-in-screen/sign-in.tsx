import { StackNavigationProp } from "@react-navigation/stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import Logo from "../../../components/icons/logo/logo";
import Anchor from "../../../components/ui/anchor";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import { User } from "../../../utils/types";
import { RootStackParamList } from "../utils/types";
import styles from "./styles";

type SignInProps = StackNavigationProp<RootStackParamList, "SignIn">;

export default function SignIn(props: {
  navigation: SignInProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, "email" | "password">>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const auth = FIREBASE_AUTH;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Ocurrió un error",
        text2: error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const goToSignUp = () => {
    props.navigation.push("SignUp");
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.brandContainer}>
          <Logo width="70" height="70" />
          <Text style={styles.title}>SmarTerrario</Text>
          <Text style={styles.subtitle}>INICIA SESIÓN</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.groupInput}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="jperez@gmail.com"
                  label="Correo electrónico"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email}
                />
              )}
              rules={{ required: "Este campo es obligatorio" }}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Escribe una contraseña..."
                  label="Contraseña"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password}
                  secureTextEntry
                />
              )}
              rules={{ required: "Este campo es obligatorio" }}
            />
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              style={{ width: "85%" }}
              onPress={handleSubmit(onSubmit)}
              loading={loading}
            >
              Iniciar sesión
            </Button>
            <View>
              <View style={styles.groupedText}>
                <Text style={styles.authText}>¿Aún no tienes una cuenta?</Text>
                <Anchor onPress={goToSignUp}>Crea una cuenta</Anchor>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

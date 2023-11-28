import { StackNavigationProp } from "@react-navigation/stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import Logo from "../../../components/icons/logo/logo";
import Anchor from "../../../components/ui/anchor";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../services/firebase-config";
import { User } from "../../../utils/types";
import { RootStackParamList } from "../utils/types";
import styles from "./styles";
import { doc, setDoc } from "firebase/firestore";

type SignUpProps = StackNavigationProp<RootStackParamList, "SignUp">;

export default function SignUpScreen(props: {
  navigation: SignUpProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, "name" | "email" | "password">>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const auth = FIREBASE_AUTH;

  const onSubmit = async (data: Pick<User, "name" | "email" | "password">) => {
    setLoading(true);
    try {
      const { email, password, name } = data;
      const location = "Sin especificar";
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      await setDoc(doc(FIREBASE_DB, "users", uid), {
        name,
        email,
        location,
      });
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

  const goToSignIn = () => {
    props.navigation.push("SignIn");
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
          <Text style={styles.subtitle}>CREA UNA CUENTA</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.groupInput}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Juan Perez"
                  label="Nombres"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.name}
                />
              )}
              name="name"
              rules={{ required: "Este campo es obligatorio" }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="jperez@gmail.com"
                  label="Correo electrónico"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.email}
                />
              )}
              name="email"
              rules={{ required: "Este campo es obligatorio" }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Escribe una contraseña..."
                  label="Contraseña"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password}
                  secureTextEntry
                />
              )}
              name="password"
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
              Crear una cuenta
            </Button>
            <View style={styles.groupedText}>
              <Text style={styles.authText}>¿Ya tienes una cuenta?</Text>
              <Anchor onPress={goToSignIn}>Inicia Sesión</Anchor>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import Toast from "react-native-toast-message";
import Subtitle from "../../../components/profile/atoms/subtitle";
import Button from "../../../components/ui/button";
import ImageUploader from "../../../components/ui/image-uploader";
import Input from "../../../components/ui/input";
import Select from "../../../components/ui/select";
import EnvironmentService from "../../../services/environment/environment-service";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import { Animal, AnimalType } from "../../../utils/types";
import { EnvFormStyles } from "../utils/shared/styles";
import { RootStackParamList } from "../utils/types";

type EditEnvironmentProps = StackNavigationProp<
  RootStackParamList,
  "EditEnvironment"
>;

export default function EditEnvironmenScreen(props: {
  navigation: EditEnvironmentProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [envForm, setEnvForm] = useState<Animal>();
  const environmentID = props.route.params.environmentID;
  const enviroments = new EnvironmentService(FIREBASE_AUTH.currentUser);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Animal>({
    defaultValues: {
      title: envForm?.title,
      description: envForm?.description,
      photo: envForm?.photo,
      animalType: envForm?.animalType,
      apiKey: envForm?.apiKey,
      channel: envForm?.channel,
    },
  });

  const getEnvironment = () => {
    enviroments
      .getEnvironmentById(environmentID)
      .then((env) => {
        setEnvForm(env);
        reset(env);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  useEffect(() => {
    getEnvironment();
  }, []);

  const onSubmit = async (data: Animal) => {
    try {
      setLoading(true);
      await enviroments.updateEnvironment(data);
      props.navigation.push("Dashboard");
      Toast.show({
        type: "success",
        text1: "Entorno ha sido actualizado",
        text2: "El entorno se ha actualizado correctamente",
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log("error ", error);
      Toast.show({
        type: "error",
        text1: "Ocurrió un error",
        text2: error.message,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      enabled
    >
      <ScrollView style={EnvFormStyles.form}>
        <Subtitle>Datos del Entorno</Subtitle>
        <View
          style={[
            EnvFormStyles.groupInput,
            {
              marginTop: 10,
            },
          ]}
        >
          <Controller
            control={control}
            name="photo"
            render={({ field: { onChange } }) => (
              <ImageUploader
                currentImage={envForm?.photo}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={"Pancho"}
                label="Nombre"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.title}
                styleInput={EnvFormStyles.inputProfile}
                styleLabel={EnvFormStyles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="El entorno debe estar en un lugar fresco y seco..."
                label="Descripción"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.description}
                styleInput={EnvFormStyles.inputProfile}
                styleLabel={EnvFormStyles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="animalType"
            render={({ field: { onChange, value } }) => (
              <Select
                items={[
                  { label: "Roedor", value: AnimalType.Rondent },
                  { label: "Reptil", value: AnimalType.Reptile },
                  { label: "Arácnido", value: AnimalType.Arachnid },
                ]}
                onValueChange={(value) => onChange(value)}
                value={value}
                styleInput={EnvFormStyles.inputProfile}
                styleLabel={EnvFormStyles.labelProfile}
                label="Tipo de Entorno"
                error={errors.animalType}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="apiKey"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="**********"
                label="API Key"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.apiKey}
                styleInput={EnvFormStyles.inputProfile}
                styleLabel={EnvFormStyles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="channel"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="1234567"
                label="Channel ID"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.apiKey}
                styleInput={EnvFormStyles.inputProfile}
                styleLabel={EnvFormStyles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
        </View>
        <Button
          style={{
            marginTop: 15,
            paddingVertical: 10,
          }}
          textStyle={{
            fontSize: 18,
          }}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        >
          Actualizar
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

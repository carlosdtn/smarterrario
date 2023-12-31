import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
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

type RegisterEnvironmentProps = StackNavigationProp<
  RootStackParamList,
  "RegisterEnvironment"
>;

export default function RegisterEnvironment(props: {
  navigation: RegisterEnvironmentProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Animal>({
    defaultValues: {
      title: "",
      description: "",
      photo: "",
      animalType: AnimalType.Rondent,
      apiKey: "",
      channel: "",
    },
  });
  const enviroments = new EnvironmentService(FIREBASE_AUTH.currentUser);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: Animal) => {
    try {
      setLoading(true);
      await enviroments.createEnvironment(data);
      props.navigation.push("Dashboard");
      Toast.show({
        type: "success",
        text1: "Entorno registrado",
        text2: "El entorno se ha registrado correctamente",
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
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
              <ImageUploader onChange={onChange} />
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
          Registrar
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

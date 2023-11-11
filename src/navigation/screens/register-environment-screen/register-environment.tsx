import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/types";
import { Controller, useForm } from "react-hook-form";
import Input from "../../../components/ui/input";
import Button from "../../../components/ui/button";
import Subtitle from "../../../components/profile/atoms/subtitle";
import { Animal, AnimalType, User } from "../../../utils/types";
import RNPickerSelect from "react-native-picker-select";
import select from "../../../components/ui/select";
import Select from "../../../components/ui/select";
import IconUpload from "../../../components/icons/upload/upload";

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
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.generalSection}>
      <View style={styles.form}>
        <Subtitle>Datos del Entorno</Subtitle>
        <View style={styles.groupInput}>
          <Controller
            control={control}
            name="photo"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.avatarImage}
                    source={require("../../../../assets/favicon.png")}
                  />
                  <Button style={styles.avatarImageEdit}>
                    <IconUpload width="24" height="24" color="white" />
                  </Button>
                </View>
              </View>
            )}
            rules={{ required: "Este campo es obligatorio" }}
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
                styleInput={styles.inputProfile}
                styleLabel={styles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Es un roedor muy amigable..."
                label="Descripción"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.description}
                styleInput={styles.inputProfile}
                styleLabel={styles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="animalType"
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                items={[
                  { label: "Roedor", value: AnimalType.Rondent },
                  { label: "Reptil", value: AnimalType.Reptile },
                  { label: "Arácnido", value: AnimalType.Arachnid },
                ]}
                onValueChange={onChange}
                value={value}
                styleInput={styles.inputProfile}
                styleLabel={styles.labelProfile}
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
                styleInput={styles.inputProfile}
                styleLabel={styles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
        </View>
        <Button
          style={{
            paddingVertical: 5,
          }}
          textStyle={{
            fontSize: 18,
          }}
          onPress={handleSubmit(onSubmit)}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalSection: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  form: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  groupInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
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

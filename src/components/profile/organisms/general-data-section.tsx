import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Subtitle from "../atoms/subtitle";
import Button from "../../ui/button";
import { Controller, useForm } from "react-hook-form";
import Input from "../../ui/input";
import { User } from "../../../utils/types";

interface GeneralDataSectionProps {
  user: Pick<User, "location" | "password">;
}

export default function GeneralDataSection({ user }: GeneralDataSectionProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, "location" | "password">>({
    defaultValues: {
      location: user.location || "Sin ubicación",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.generalSection}>
      <View style={styles.form}>
        <Subtitle>Datos Generales</Subtitle>
        <View style={styles.groupInput}>
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={user.location}
                label="Ubicación"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.location}
                styleInput={styles.inputProfile}
                styleLabel={styles.labelProfile}
              />
            )}
            rules={{ required: "Este campo es obligatorio" }}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="**********"
                label="Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password}
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
          Guardar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalSection: {
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
    gap: 10,
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
});

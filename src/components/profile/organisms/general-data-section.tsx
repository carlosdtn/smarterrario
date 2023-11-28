import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { User, UserDoc } from "../../../utils/types";
import Button from "../../ui/button";
import Input from "../../ui/input";
import Subtitle from "../atoms/subtitle";
import UserService from "../../../services/user/user-service";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import Toast from "react-native-toast-message";

interface GeneralDataSectionProps {
  user: UserDoc | null;
}

export default function GeneralDataSection({ user }: GeneralDataSectionProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, "location" | "password">>({
    defaultValues: {
      location: user?.location || "Sin ubicación",
      password: "",
    },
  });
  const FBUser = new UserService(FIREBASE_AUTH.currentUser);

  const onSubmit = async (data: Pick<User, "location" | "password">) => {
    try {
      setLoading(true);
      await FBUser.updateGeneralData({
        location: data.location,
        password: data.password,
      });
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "Datos actualizados",
        text2: "Los datos se han actualizado correctamente",
      });
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
    <View style={styles.generalSection}>
      <View style={styles.form}>
        <Subtitle>Datos Generales</Subtitle>
        <View style={styles.groupInput}>
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Ciudad, País"
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
          loading={loading}
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

import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import AvatarSection from "../../../components/profile/organisms/avatar-section";
import EnviromentSection from "../../../components/profile/organisms/environment-section";
import GeneralDataSection from "../../../components/profile/organisms/general-data-section";
import { RootStackParamList } from "../utils/types";
import { USER_MOCK, ANIMALS_MOCK } from "../utils/mocks";

type DashboardProps = StackNavigationProp<RootStackParamList, "Dashboard">;

export default function Profile(props: {
  navigation: DashboardProps;
  children?: React.ReactNode;
  route?: any;
}) {
  return (
    <View style={styles.profileScreenContainer}>
      {/* Imagen y nombre de usuario */}
      <AvatarSection user={USER_MOCK} />
      {/* Datos generales de usuarios */}
      <GeneralDataSection user={USER_MOCK} />
      {/* Configuración de entornos */}
      <EnviromentSection animals={ANIMALS_MOCK} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreenContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
    width: "100%",
  },
});

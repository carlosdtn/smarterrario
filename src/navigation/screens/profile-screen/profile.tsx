import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import AvatarSection from "../../../components/profile/organisms/avatar-section";
import EnviromentSection from "../../../components/profile/organisms/environment-section";
import GeneralDataSection from "../../../components/profile/organisms/general-data-section";
import { Animal, UserDoc } from "../../../utils/types";
import { RootStackParamList } from "../utils/types";

type DashboardProps = StackNavigationProp<RootStackParamList, "Dashboard">;

export default function Profile(props: {
  navigation: DashboardProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const userState = useSelector(
    (state: { user: { user: UserDoc | null } }) => state.user.user
  );
  const environmentsState = useSelector(
    (state: { environment: { environment: Animal[] } }) =>
      state.environment.environment
  );

  return (
    <View style={styles.profileScreenContainer}>
      {/* Imagen y nombre de usuario */}
      <AvatarSection user={userState} />
      {/* Datos generales de usuarios */}
      <GeneralDataSection user={userState} />
      {/* Configuración de entornos */}
      <EnviromentSection
        animals={environmentsState}
        navigation={props.navigation}
      />
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

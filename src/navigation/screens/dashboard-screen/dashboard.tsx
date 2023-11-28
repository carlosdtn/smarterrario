import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import AccountSection from "../../../components/dashboard/organisms/account-section";
import CategorySection from "../../../components/dashboard/organisms/category-section";
import EnvironmentSection from "../../../components/dashboard/organisms/environment-section";
import RecomendationsSection from "../../../components/dashboard/organisms/recomendations-section";
import EnvironmentService from "../../../services/environment/environment-service";
import UserService from "../../../services/user/user-service";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import { Animal, UserDoc } from "../../../utils/types";
import { RECOMENDATIONS_MOCK, categories } from "../utils/mocks";
import { RootStackParamList } from "../utils/types";

type DashboardProps = StackNavigationProp<RootStackParamList, "Dashboard">;

export default function Dashboard(props: {
  navigation: DashboardProps;
  children?: React.ReactNode;
  route?: any;
}) {
  const userState = useSelector(
    (state: { user: { user: UserDoc | null } }) => state.user.user
  );
  const environmentState = useSelector(
    (state: { environment: { environment: Animal[] } }) =>
      state.environment.environment
  );
  const user = new UserService(FIREBASE_AUTH.currentUser);
  const environments = new EnvironmentService(FIREBASE_AUTH.currentUser);

  useEffect(() => {
    const fetchData = async () => {
      await user.getUser();
      await environments.getEnvironments();
    };

    fetchData();
  }, []);

  return (
    <View style={styles.dashboardSectionContainer}>
      <AccountSection navigation={props.navigation} user={userState} />
      {/* Categoria de entornos */}
      <CategorySection categories={categories} />
      {/* Entornos */}
      <EnvironmentSection
        navigation={props.navigation}
        animals={environmentState}
      />
      {/* Recomendaciones */}
      <RecomendationsSection recomendations={RECOMENDATIONS_MOCK} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardSectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
    width: "100%",
  },
});

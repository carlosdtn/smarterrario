import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import AccountSection from "../../../components/dashboard/organisms/account-section";
import CategorySection from "../../../components/dashboard/organisms/category-section";
import EnvironmentSection from "../../../components/dashboard/organisms/environment-section";
import RecomendationsSection from "../../../components/dashboard/organisms/recomendations-section";
import {
  ANIMALS_MOCK,
  categories,
  RECOMENDATIONS_MOCK,
  USER_MOCK,
} from "../utils/mocks";
import { RootStackParamList } from "../utils/types";

type DashboardProps = StackNavigationProp<RootStackParamList, "Dashboard">;

export default function Dashboard(props: {
  navigation: DashboardProps;
  children?: React.ReactNode;
  route?: any;
}) {
  return (
    <View style={styles.dashboardSectionContainer}>
      <AccountSection navigation={props.navigation} user={USER_MOCK} />
      {/* Categoria de entornos */}
      <CategorySection categories={categories} />
      {/* Entornos */}
      <EnvironmentSection
        navigation={props.navigation}
        animals={ANIMALS_MOCK}
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

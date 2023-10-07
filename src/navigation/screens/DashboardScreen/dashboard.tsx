import { View, Text } from "react-native";
import { RootStackParamList } from "../utils/types";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../../../components/ui/button";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import Toast from "react-native-toast-message";

type DashboardProps = StackNavigationProp<RootStackParamList, "Dashboard">;

export default function Dashboard(props: {
  navigation: DashboardProps;
  children?: React.ReactNode;
  route?: any;
}) {
  return (
    <View>
      <Text>Dashboard</Text>
      <View>
        <Button
          onPress={() => {
            FIREBASE_AUTH.signOut();
            Toast.show({
              type: "success",
              text1: "Estado de la sesión",
              text2: "Sesión cerrada correctamente",
            });
          }}
        >
          <Text>Cerrar sesión</Text>
        </Button>
      </View>
    </View>
  );
}

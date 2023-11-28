import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WelcomeScreen,
  SignUpScreen,
  SignInScreen,
  DashboardScreen,
  ProfileScreen,
  RegisterEnvironment,
  EnvironmentDetail,
  EditEnvironment,
} from "../screens";
import { RootStackParamList } from "../screens/utils/types";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../services/firebase-config";
import Toast from "react-native-toast-message";
import Logo from "../../components/icons/logo/logo";
import { CategoryProvider } from "../../context/category-context";
import { Provider } from "react-redux";
import store from "../../redux/store";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
        Toast.show({
          type: "success",
          text1: "Estado de la sesión",
          text2: "Bienvenido " + user?.email,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <CategoryProvider>
        <Stack.Navigator initialRouteName="Welcome">
          {user ? (
            <>
              <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={appPagesOptions("Dashboard")}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={appPagesOptions("Mi Perfil")}
              />
              <Stack.Screen
                name="RegisterEnvironment"
                component={RegisterEnvironment}
                options={appPagesOptions("Registro de Entorno")}
              />
              <Stack.Screen
                name="EnvironmentDetail"
                component={EnvironmentDetail}
                options={appPagesOptions("Entorno")}
              />
              <Stack.Screen
                name="EditEnvironment"
                component={EditEnvironment}
                options={appPagesOptions("Editar Entorno")}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </CategoryProvider>
    </Provider>
  );
}

const appPagesOptions = (title: string) => ({
  title,
  headerStyle: {
    backgroundColor: "#0BA360",
  },
  headerTintColor: "#fff",
});

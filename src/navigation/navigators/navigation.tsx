import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WelcomeScreen,
  SignUpScreen,
  SignInScreen,
  DashboardScreen,
} from "../screens";
import { RootStackParamList } from "../screens/utils/types";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../services/firebase-config";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        // console.log(user);
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
    <Stack.Navigator initialRouteName="Welcome">
      {user ? (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
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
  );
}

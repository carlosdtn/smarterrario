import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen, SignUpScreen, SignInScreen } from "../screens";
import { RootStackParamList } from "../screens/utils/types";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const [user, setUser] = useState<boolean>(false);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={WelcomeScreen} />
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

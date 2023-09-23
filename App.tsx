import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import "react-native-gesture-handler";
import Navigation from "./src/navigation/navigators/navigation";
import WelcomeScreen from "./src/navigation/screens/welcome";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {!isReady ? (
        <WelcomeScreen />
      ) : (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      )}
    </>
  );
}

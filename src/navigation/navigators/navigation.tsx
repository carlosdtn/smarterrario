import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import WelcomeScreen from "../screens/welcome";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Favorite" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
}

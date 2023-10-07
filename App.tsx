import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/navigators/navigation";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}

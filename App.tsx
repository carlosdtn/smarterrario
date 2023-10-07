import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/navigators/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

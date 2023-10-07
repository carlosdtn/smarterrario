import {
  Alert,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  children,
  onPress,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0BA360",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "auto",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

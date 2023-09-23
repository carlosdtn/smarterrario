import {
  Alert,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

interface AnchorProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Anchor({
  children,
  onPress,
  style,
  textStyle,
}: AnchorProps) {
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: "auto",
    borderWidth: 0,
  },
  buttonText: {
    color: "#0BA360",
    fontSize: 14,
    fontWeight: "bold",
  },
});

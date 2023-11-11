import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  variant?: "primary" | "ghost";
}

const buttonVariants = {
  primary: {
    backgroundColor: "#0BA360",
    color: "white",
  },
  ghost: {
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
};

export default function Button({
  children,
  onPress,
  style,
  textStyle,
  loading,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonVariants[variant],
        style,
        loading && { opacity: 0.5, paddingVertical: 13.5 },
      ]}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      )}
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

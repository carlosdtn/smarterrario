import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {
  label?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  error?: FieldError | undefined;
  secureTextEntry?: boolean;
}

const Input: ForwardRefRenderFunction<TextInput, InputProps> = (
  { label, placeholder, value, onChangeText, error, secureTextEntry, ...props },
  ref
) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[styles.input, error && { borderColor: "#FF0000" }]}
        {...props}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

export default forwardRef(Input);
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  error: {
    position: "absolute",
    bottom: -16,
    left: 0,
    color: "#FF0000",
    fontSize: 12,
  },
});

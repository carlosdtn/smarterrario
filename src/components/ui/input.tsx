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
  styleInput?: {
    [key: string]: string | number;
  };
  styleLabel?: {
    [key: string]: string | number;
  };
  styleContainer?: {
    [key: string]: string | number;
  };
  disabled?: boolean;
  defaultValue?: string;
}

const Input: ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    label,
    placeholder,
    value,
    onChangeText,
    error,
    secureTextEntry,
    styleInput,
    styleLabel,
    styleContainer,
    disabled,
    defaultValue,
    ...props
  },
  ref
) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {label && <Text style={[styles.label, styleLabel]}>{label}</Text>}
      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[styles.input, styleInput, error && { borderColor: "#FF0000" }]}
        editable={disabled}
        defaultValue={defaultValue}
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

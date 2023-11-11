import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface InputProps {
  label?: string;
  value?: string;
  onValueChange?: (value: any) => void;
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
  items: {
    label: string;
    value: string;
  }[];
}

const Select: ForwardRefRenderFunction<TextInput, InputProps> = ({
  label,
  value,
  onValueChange,
  error,
  styleInput,
  styleLabel,
  styleContainer,
  items,
  ...props
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {label && <Text style={[styles.label, styleLabel]}>{label}</Text>}
      <View style={styles.select}>
        <RNPickerSelect
          placeholder={{
            label: "Selecciona una opción...",
            value: null,
            color: "gray",
          }}
          value={value}
          items={items}
          onValueChange={() => onValueChange}
          style={{
            inputIOS: {
              paddingHorizontal: 10,
              borderWidth: 1,
              borderBottomColor: "black",
              ...styleInput,
            },
            inputAndroid: {
              paddingHorizontal: 10,
              borderWidth: 1,
              borderBottomColor: "black",
              ...styleInput,
            },
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

export default Select;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
    position: "relative",
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
  select: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});

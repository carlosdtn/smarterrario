import { TextInput, View, Text, StyleSheet } from "react-native";

interface InputProps {
  label?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
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
});

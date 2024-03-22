import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, secureTextEntry = false }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="rgba(192, 192, 192, 0.5)"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 100,
    paddingLeft: 0,
    paddingVertical: 10,
    color: "rgba(192, 192, 192, 1)",
    marginHorizontal: 20,
    marginLeft: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 0,
    fontSize: 16
  },
});

export default Input;

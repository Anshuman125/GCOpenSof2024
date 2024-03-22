import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Password = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={true}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="rgba(192, 192, 192, 0.5)"
    />
  );
};

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 100,
        paddingLeft: 0,
        paddingVertical: 10,
        color: "grey",
        marginHorizontal: 10,
        marginLeft: 0,
        borderRadius: 5,
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderWidth: 0,
        fontSize: 16,
        marginBottom: 10,
        // marginTop: 10,
    }
});

export default Password;

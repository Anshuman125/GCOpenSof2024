import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/Navb";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordConfirmation from "../components/PasswordConfirmation";

const Register = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submit button pressed');
    // Navigate to Plans screen
    navigation.navigate('Plans');
  };

  return (
    <ImageBackground source={require('../../assets/netflixbg.jpeg')} style={styles.background}>
      <Navbar />
      <View style={styles.container}>
        <View style={styles.loginBg}>
          <Text style={styles.loginText}>Register</Text>
          <View style={styles.inputContainer}>
            <Input placeholder="Enter your email" />
          </View>
          <View style={styles.inputContainer}>
            <PasswordConfirmation placeholder="Confirm your password" />
          </View>
          <Button title="Register" onPress={handleSubmit} />
          <View style={styles.registerContainer}>
            <Text style={styles.newToSiteText}>New to this site?</Text>
            <Text onPress={() => navigation.navigate('Login')} style={styles.registerNowText}>Login</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    alignContent: "center",
    padding: 0,
    margin: 0,
    zIndex: 69,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginHorizontal: 180,
    marginLeft: 30,
  },
  loginBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: "2%",
    paddingVertical: "5%"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 1)",
    paddingVertical: 10
  },
  registerContainer: {
    marginTop: 70,
    marginHorizontal: 21,
    flexDirection: "row",
    gap: 5,
  },
  newToSiteText: {
    color: "grey",
  },
  registerNowText: {
    fontWeight: "bold",
    textDecorationLine:"underline",
    color: "grey",
  }
});

export default Register;

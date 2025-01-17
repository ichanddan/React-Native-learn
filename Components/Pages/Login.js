import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Api from "../../Api";


const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const handleLogin = () => {
    const user = Api.LoginApi(form)
    if (user) {
      Alert.alert("Success", 'login');
      console.log({login: true});
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    } else {
      Alert.alert("Invalid email or password");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            onChangeText={(value) => handleChange("email", value)}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            onChangeText={(value) => handleChange("password", value)}
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Don't have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 20,
    color: "#333",
    textAlign: "center",
  },
  loginLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

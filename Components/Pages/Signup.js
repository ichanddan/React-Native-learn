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

const Signup = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  }; // Fixed syntax error here (removed 'r')

  const handleSignup = async () => {
    // Validate required fields
    try {
      const res = await Api.SignupApi(form);
      console.log(res.data);
      if (res.data) {
        Alert.alert("Success", "Signup completed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            onChangeText={(value) => handleChange("fullName", value)}
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="words"
          />

          <TextInput
            onChangeText={(value) => handleChange("email", value)}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            onChangeText={(value) => handleChange("phone", value)}
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          <TextInput
            onChangeText={(value) => handleChange("password", value)}
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />

          <TextInput
            onChangeText={(value) => handleChange("confirmPassword", value)}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("Login")}
            >
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

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

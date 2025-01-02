import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const handleChange = (key, value) => {
        setForm({...form, [key]: value})
    }
    const signInWithEmail = () => {
        console.log(form)
        Alert/*  */.alert("Sign in with email")
    }
    const signUpWithEmail = () => {
        console.log(form)
    }
  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          onChangeText={(value) => handleChange("email", value)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          onChangeText={(value) => handleChange("password", value)}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" onPress={() => signInWithEmail(form)} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" onPress={() => signUpWithEmail()} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    width: "100%",
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});

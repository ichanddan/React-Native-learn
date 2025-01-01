import { Text, View, StyleSheet } from "react-native";

export default function login() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.loginText}>login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});


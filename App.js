import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Pages/Home";
import Signup from "./Components/Pages/Signup";
import Login from "./Components/Pages/Login";
import OpeningScreen from "./Components/Pages/OpeningScreen";
import FeedScreen from "./Components/Pages/FeedScreen";
import ProfilePage from "./Components/Pages/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen name="feed" component={FeedScreen} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown: false}} />
        <Stack.Screen name="OpeningScreen" component={OpeningScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

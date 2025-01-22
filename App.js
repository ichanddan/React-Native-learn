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
import DonationScreen from "./Components/Pages/DonationScreen";
import { createContext, useState } from 'react';

const Stack = createNativeStackNavigator();
const AuthContext = createContext();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const authContext = {
    signIn: (token) => {
      setUserToken(token);
      setIsAuthenticated(true);
    },
    signOut: () => {
      setUserToken(null);
      setIsAuthenticated(false);
    },
    userToken,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
          <Stack.Screen name="feed" component={FeedScreen} options={{headerShown: false}} />
          <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown: false}} />
          <Stack.Screen name="DonationScreen" component={DonationScreen} options={{headerShown: false}} />
          <Stack.Screen name="OpeningScreen" component={OpeningScreen} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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

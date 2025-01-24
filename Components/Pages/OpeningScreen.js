import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const OpeningScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    if(isLoading == true){
        navigation.navigate('Home')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the app</Text>
      <Image
        source={require('..D/../assets/golden-logo-template-free-png.webp')}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginBottom: 20
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => isLoading == true ? navigation.navigate('Home') : navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OpeningScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    width: '80%',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

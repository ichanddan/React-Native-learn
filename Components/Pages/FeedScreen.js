import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FeedScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('OpeningScreen')
  }, 2000)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }

})
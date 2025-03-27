import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function index() {
  return (
    <View style={styles.container}>
      <LottieView
      source={require('../assets/animations/Animation - 1742872724814.json')}
      style={{width: 300, height: 300, alignSelf:'center'}}
      autoPlay // Si quieres que la animación se reproduzca automáticamente
      loop // Si quieres que se repita
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CF8FE3',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
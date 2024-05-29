import React from 'react'
import { View, Text, Image } from 'react-native'
import boxLogo from '../assets/boxLogoFinal.png'
import styles from './styles'
const HomeScreen = () => {
  return (
    <View>
      <Image style={styles.logo} source={boxLogo} />
    </View>
  )
}

export default HomeScreen
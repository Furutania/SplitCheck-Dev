import React from 'react'
import { View, Text, Image, Button} from 'react-native'
import boxLogo from '../assets/boxLogoFinal.png'
import styles from './styles'

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate("Login");
        // Navigate to the login screen or perform any necessary actions
      };

  return (
    <View>
      <Image style={styles.logo} source={boxLogo} />
      <Button onPress={handleLogout} style={styles.signupText} title="sign out"/>
    </View>
  )
}

export default HomeScreen
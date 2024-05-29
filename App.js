// In App.js in a new project

import React, { useEffect, useState }from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {
  const [isAuthenticationFinished, setIsAuthenticationFinished] = useState(false);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Check AsyncStorage for the token
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        //send to backend to verify token
        setUserToken(token);
      } catch (e) {
        console.error('Error fetching user token:', e);
      }
      setIsAuthenticationFinished(true);
    };

    checkToken();
  }, []);
  if (!isAuthenticationFinished) {
    // Return a loading indicator or splash screen until authentication is finished
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken ? 'Home' : 'Login'} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen}   options={{ gestureEnabled: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
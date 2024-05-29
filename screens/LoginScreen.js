
//UI components
import React, { useEffect, useState }from 'react'
import {View, Text,TextInput, Image, Dimensions, 
        TouchableWithoutFeedback, Keyboard, TouchableOpacity,
        Button
        } from 'react-native'
import Animated, { FadeIn, BounceIn, BounceOut, Easing, Keyframe 
        } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import styles  from './styles'
//Assets
import longLogo from '../assets/longLogoFinal.png'
//Router
import { useNavigation } from '@react-navigation/native';



const enteringAnimation = new Keyframe({
    0: {
        opacity: 0,
    },
    100: {
        opacity: 1,
    }
}).duration(1000);


// loginUser
// - function that attempts to login user with a POST request
//
// - param creds: the fields input to the form
async function loginUser(creds){
    console.log(creds);
    return fetch('/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(creds)
    }).then(data => data.json())
}

async function removeJWT(){
    localStorage.clear();
}

// const window = Dimensions.get('window');

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [buttonPressed, setButtonPressed] = useState(false);
    const [error, setError] = useState(false)
    const [errorVisible, setErrorVisible] = useState({display:"none"})
    const navigation = useNavigation();
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    
    const handlePasswordChange = (text) => {
    setPassword(text);
    };

    const handleSubmit = () => {
    // Here you can handle form submission, e.g., validate inputs, send to server, etc.
    console.log('Login Info', `Email: ${email}\nPassword: ${password}`);
    navigation.navigate("Home");
    // Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
    };
    const handleSignup = () =>{
        navigation.navigate("Signup");
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.main}>
                <StatusBar style='dark'/>
                    <Animated.View  entering={enteringAnimation}>
                        <Image style={styles.logo} source={longLogo} />

                        <View style={styles.container}>
                            <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor="#aaa"
                            />

                            <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor="#aaa"
                            />
                            <TouchableOpacity
                                onPress={handleSubmit}
                                onPressIn={() => setButtonPressed(true)}
                                onPressOut={() => setButtonPressed(false)}
                                >
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <Button onPress={handleSignup} style={styles.signupText} title="Dont have an account?
Click here to sign up"/>

                        </View>

                    </Animated.View>
                </View>
        </TouchableWithoutFeedback>
    )

}

export default LoginScreen
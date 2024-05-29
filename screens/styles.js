import {Dimensions } from 'react-native'
const window = Dimensions.get('window');
const styles = {
    main:{
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    },

    logo: {
        width: window.width - 40, // screen width minus margin (20 + 20)
        marginTop: window.height/5 - 80,
        marginLeft: 20,
        marginBottom: window.height/5 - 80,
        marginRight: 20,
        resizeMode: 'contain', // ensure the image scales within its container
      },

    container: {
        justifyContent: 'center',
        padding: 16,
      },
      input: {
        height: 40,
        color: '#000',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 8, 
        marginHorizontal: 20,
      },
      buttonContainer: {

        backgroundColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      signupText: {
        color: 'blue',
        fontSize: 1
      },
}

export default styles;
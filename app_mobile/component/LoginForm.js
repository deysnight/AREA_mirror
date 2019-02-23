import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import {AuthSession} from 'expo'
import AppNavigator from '../navigation/navigation'


async function FacebookSignIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('411072423035343', {
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const response2 = await fetch(`https://graph.facebook.com/me/accounts?access_token=${token}`);
        const url = "https://graph.facebook.com/me/feed?access_token=" + token;
        const response3 = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response3 => response3.json())
        .then(response3 => {console.log(response3)})
        }
     else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  

export default class LoginForm extends Component {

        state = {
            result: null,
        };

        GoogleSignIn = async () => {

            let redirectUrl = AuthSession.getRedirectUrl();
            const result = await Expo.Google.logInAsync({
            androidClientId: "218486788454-is3b9o2utppp7mfjonuhnd9v2kp74ve9.apps.googleusercontent.com",
            iosClientId: "218486788454-is3b9o2utppp7mfjonuhnd9v2kp74ve9.apps.googleusercontent.com",
            behavior: 'web',
            scopes: ["profile", "email", "https://mail.google.com/", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/spreadsheets"]
            })
            if (result.type === "success") {
                console.log(result.accessToken);
                var google_token = result.accessToken;
                //Redirect to app;
            } else {
                console.log("cancelled")   
            }
        }
        
    getLogged() {
        console.log("ok");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="Pseudo"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput
                placeholder="Mot de passe"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
            <TouchableOpacity style={styles.buttonContainer} onPress={this.getLogged}
                
                >
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.GoogleSignIn}>
                <Text style={styles.buttonText}>Se connecter via Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={FacebookSignIn}>
                <Text style={styles.buttonText}>Se connecter via Facebook</Text>
            </TouchableOpacity>
            {this.state.result ? (
		    <Text> {this.access_token} </Text>
            ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    padding: 20
    },
    input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
    }
});
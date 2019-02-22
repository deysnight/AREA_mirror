import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View, TextInput, TouchableOpacity, Text } from 'react-native';
import {AuthSession} from 'expo'
import AppNavigator from '../navigation/navigation'


export default class LoginForm extends Component {

        state = {
            result: null,
        };

        _signIn = async () => {

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
            <TouchableOpacity style={styles.buttonContainer} onPress={this._signIn}>
                <Text style={styles.buttonText}>Se connecter via Google</Text>
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
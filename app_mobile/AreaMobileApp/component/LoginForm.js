import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {

    constructor (props) {
        super(props)
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
            <TouchableOpacity style={styles.buttonContainer}
                
                >
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
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
import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import LoginForm from './component//LoginForm'

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.username = "";
        this.password = "";
    }

    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
            <View style={loginStyles.logoContainer}>
                <Image style={loginStyles.logo}
                    source={require('./assets/nazi.jpeg')}
                    />
                <Text style={loginStyles.title}>AREA</Text>
            </View>
            <View style={loginStyles.formContainer}>
                <LoginForm />
            </View>
        </KeyboardAvoidingView>
    );
  }
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    opacity: 0.9,
    textAlign: 'center',
    fontSize: 20
  }
})
export default LoginScreen
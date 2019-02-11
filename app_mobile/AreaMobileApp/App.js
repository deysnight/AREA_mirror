import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import TabNavigator from "./navigation/BottomTab";

export default class App extends Component {

  _isLoggedIn() {
      return false;
  }

  _displayLogin() {

      if (this._isLoggedIn()) {
          return <TabNavigator/>
      } else {
          return <Text>loginpage</Text>;
      }
  }

  _displayApp() {
    return this._displayLogin();
  }

  render() {
      return this._displayApp();
  }
}


{/*class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

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

       {/* <Button title="Valider" onPress={this.login_function} /> 
      </KeyboardAvoidingView>
    );
  }

  show_signup = async () => {
    this.props.navigation.navigate('Signup');
  };
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
    width: 100,
    height: 100,
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
*/}
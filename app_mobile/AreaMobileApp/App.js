import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import AppNavigation from "./navigation/BottomTab";
import LoginScreen from "./ViewLogin"

export default class App extends Component {

  logged() {
      return true;
  }

  _displayLogin() {
      if (this.logged()) {
          return <AppNavigation/>
      } else {
          return <LoginScreen/>
      }
  }

  AREA() {
    return this._displayLogin();
  }

  render() {
      return this.AREA();
  }
}
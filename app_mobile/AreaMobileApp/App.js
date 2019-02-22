import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import AppNavigation from "./navigation/BottomTab";
import LoginScreen from "./ViewLogin";
import AppNavigator from './navigation/navigation'
import SyncStorage from 'sync-storage';


export default class App extends Component {
  constructor(props) {
      super(props);
  }
  _displayLogin() {
      const result = SyncStorage.get('logged');
      if (result == true) {
          return <AppNavigator/>
      } else {
          return <LoginScreen/>
      }
  }

  AREA() {
    return this._displayLogin();
  }

  render() {
      SyncStorage.set('logged', true);
      return this.AREA();
  }
}
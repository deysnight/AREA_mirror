import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import SyncStorage from 'sync-storage';
import AppNavigation from "./navigation/BottomTabApp"
import AuthNavigation from "./navigation/BottomTabAuth"
import ScreenOauth from "./Screens/ScreenOauth"
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
  } from 'react-navigation';

export default class App extends Component {
  AREA() {
    return <AppContainer/>
  }

  render() {
      return this.AREA();
  }
}

const LoginStack = createStackNavigator(
    {
        AuthStack: { screen: AuthNavigation }
    },
    {
        headerMode: 'none',
    }
)

const BottomTabNavigation = createStackNavigator(
    {
        HomeStack: { screen: AppNavigation }
    },
    {
        headerMode: 'none',
    }
)

const AppNavigator = createSwitchNavigator({
    Login: LoginStack,
    App: BottomTabNavigation,
    Oauth2 : ScreenOauth,
},
{
    initialRouteName: 'Login',
})

const AppContainer = createAppContainer(AppNavigator)

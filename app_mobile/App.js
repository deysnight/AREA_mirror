import React, { Component } from 'react';
import { Text, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import SyncStorage from 'sync-storage';
import AppNavigation from "./navigation/BottomTabApp"
import AuthNavigation from "./navigation/BottomTabAuth"
import ScreenGoogle from "./Screens/ScreenGoogle"
import ScreenFacebook from "./Screens/ScreenFacebook"
import ScreenTwitch from "./Screens/ScreenTwitch"
import ScreenOneDrive from "./Screens/ScreenOneDrive"
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
      SyncStorage.set('logged', true);
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
    GoogleLogin : ScreenGoogle,
    FacebookLogin : ScreenFacebook,
    TwitchLogin : ScreenTwitch,
    OneDriveLogin : ScreenOneDrive,
},
{
    initialRouteName: 'Login',
})

const AppContainer = createAppContainer(AppNavigator)

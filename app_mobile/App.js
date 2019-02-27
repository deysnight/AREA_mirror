import React, { Component } from 'react';
import AppNavigation from "./navigation/BottomTabApp"
import AuthNavigation from "./navigation/BottomTabAuth"
import ScreenOauth from "./Screens/ScreenOauth"
import ScreenReaction from "./Screens/ScreenReaction"
import ScreenFormulaire from "./Screens/ScreenFormulaire"
import IpScreen from "./Screens/IpScreen"
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
    IP: IpScreen,
    Login: LoginStack,
    App: BottomTabNavigation,
    Oauth2 : ScreenOauth,
    Reaction : ScreenReaction,
    Formulaire : ScreenFormulaire
},
{
    initialRouteName: 'IP',
})

const AppContainer = createAppContainer(AppNavigator)

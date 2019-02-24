import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import LoginScreen from "../Screens/ScreenLogin";
import SignupScreen from "../Screens/ScreenSignup"
import Icon from 'react-native-vector-icons/FontAwesome'

const AuthNavigation = createBottomTabNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                title: "Login",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor} size={20} />
                )
            }
        },
        Signup: {
            screen: SignupScreen,
            navigationOptions: {
                title: "Signup",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="users" color={tintColor} size={20} />
                )
            }
        },
    },
    {
        order: ['Login', "Signup"],
        navigationOptions: {
            tabBarVisible: true
        },
        initialRouteName: 'Login',
        tabBarOptions: {
            activeTintColor: 'tomato',
            activeBackgroundColor: 'white',
        }
    }
);
export default AuthNavigation;
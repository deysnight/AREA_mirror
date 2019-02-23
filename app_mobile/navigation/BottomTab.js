import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ScreenHome from "../Screens/ScreenHome";
import ScreenProfile from "../Screens/ScreenProfile";
import Icon from 'react-native-vector-icons/FontAwesome'


const AppNavigation = createBottomTabNavigator(
    {

        Home: {
            screen: ScreenHome,
            navigationOptions: {
                title: "Home",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor} size={20} />
                )
            }
        },
        Profil: {
            screen: ScreenProfile,
            navigationOptions: {
                title: "Profil",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="users" color={tintColor} size={20} />
                )
            }
        },
    },
    {
        order: ['Home', "Profil"],
        navigationOptions: {
            tabBarVisible: true
        },
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'tomato',
            activeBackgroundColor: 'white',
        }
    }
);
export default createAppContainer(AppNavigation);
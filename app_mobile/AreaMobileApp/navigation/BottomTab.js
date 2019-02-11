import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ScreenHome from "../Screens/ScreenHome";


const TabNavigator = createBottomTabNavigator(
    {
        Home: ScreenHome,
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeBackgroundColor: 'red',
            inactiveBackgroundColor: 'red',
            style: {
                backgroundColor: 'red',
                shadowOpacity: 0.1,
                shadowRadius: 5,
                shadowOffset: {
                    height: -8,
                    width: 0
                },
                elevation: 1
            }
        },
    }
);

export default createAppContainer(TabNavigator);
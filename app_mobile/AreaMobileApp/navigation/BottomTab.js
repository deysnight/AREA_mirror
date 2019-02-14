import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ScreenHome from "../Screens/ScreenHome";
import Icon from 'react-native-vector-icons/FontAwesome'


const AppNavigation = createBottomTabNavigator(
    {
        Home: ScreenHome,
    },
    {
        initialRouteName: 'Home',
        tabBarIcon: ({tintColor}) => <Icon name={"youtube-play"} color={tintColor} size={25}/>,
        tabBarOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: 'white',
        }
    }
);
export default createAppContainer(AppNavigation);
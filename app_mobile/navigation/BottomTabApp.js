import React from 'react';
import {Alert} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import ScreenHome from "../Screens/ScreenHome";
import ScreenProfile from "../Screens/ScreenProfile";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'


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
        Logout: {
            screen: ScreenProfile,
            navigationOptions: ({navigation}) => ({
                title: "Logout",
                tabBarIcon: ({tintColor}) => (
                    <Icon2 name="logout" color={tintColor} size={20} />
                ),
                tabBarOnPress: (scene, jumpToIndex) => {
                      return Alert.alert(
                          'Êtes vous sûrs ?'
                          ,'Voulez vous vraiment vous déconnecter ?'
                          ,[
                            {text: 'Annuler'},
                            {text: 'Confirmer', onPress: () => navigation.navigate('Login')}
                           ]
                      );
                  },
              })
            }
    },
    {
        order: ['Home', "Profil", "Logout"],
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
export default AppNavigation;
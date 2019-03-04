import React from 'react';
import {Alert} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import ScreenHome from "../Screens/ScreenHome";
import ScreenProfile from "../Screens/ScreenProfile";
import ScreenArea from "../Screens/ScreenArea"
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import SyncStorage from 'sync-storage';

Logout = async (navigation) => {
    SyncStorage.remove('USERNAME');
    SyncStorage.remove('USER_ID');
    SyncStorage.remove("GOOGLE_TOKEN");
    SyncStorage.remove("FACEBOOK_TOKEN");
    SyncStorage.remove("TWITCH_TOKEN");
    SyncStorage.remove("ONEDRIVE_TOKEN");
    navigation.navigate('Login');
}

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
        Area: {
            screen: ScreenArea,
            navigationOptions: {
                title: "Area",
                tabBarIcon: ({tintColor}) => (
                    <Icon3 name="API" color={tintColor} size={20} />
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
                            {text: 'Confirmer', onPress: async () => this.Logout(navigation)}
                           ]
                      );
                  },
              })
            }
    },
    {
        order: ['Home', "Profil", "Area", "Logout"],
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
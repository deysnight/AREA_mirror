import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';
import SyncStorage from 'sync-storage';
import {AuthSession} from 'expo'

async function FacebookSignIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('411072423035343', {
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const response2 = await fetch(`https://graph.facebook.com/me/accounts?access_token=${token}`);
        const url = "https://graph.facebook.com/me/feed?access_token=" + token;
        const response3 = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response3 => response3.json())
        .then(response3 => {console.log(response3)})
        }
     else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  


class LoginScreen extends React.Component {
    opts = {
      authorization_endpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
      response_type: 'token',
      client_id: '4eiqmev2qb0pzztqiv626547o78m17'
};

    opts_drive = {
      authorization_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      response_type: 'token',
      client_id: '9d1f0555-d6d2-4e41-aaae-8a661a8dd511'
  }
    state = {
            username: null,
            password: null,
            result: null,
        };
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
            <View style={loginStyles.logoContainer}>
                <Image style={loginStyles.logo}
                    source={require('../assets/nazi.jpeg')}
                    />
                <Text style={loginStyles.title}>AREA</Text>
                <TextInput 
                placeholder="Pseudo"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                style={styles.input}
                ref={(input) => this.Username = input}
                onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                placeholder="Mot de passe"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                returnKeyType="send"
                secureTextEntry
                style={styles.input}
                onSubmitEditing={(event) => this.getLogged(event)}
                ref={(input) => this.passwordInput = input}
                onChangeText={(password) => this.setState({password})}
                />
            <TouchableOpacity style={styles.buttonContainer} onPress={this.getLogged}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleContainer} onPress={this.GoogleSignIn}>
                <Text style={styles.buttonText}>Se connecter via Google</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonContainer} onPress={FacebookSignIn}>
                <Text style={styles.buttonText}>Se connecter via Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.TwitchSignIn}>
                <Text style={styles.buttonText}>Se connecter via Twitch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.OneDriveSignIn}>
                <Text style={styles.buttonText}>Se connecter via OneDrive</Text>
        </TouchableOpacity>*/}
            </View>
        </KeyboardAvoidingView>
    );
  }

  getLogged = () => {
    username = this.state.username;
    password = this.state.password;
    if (!username || !password)
        return Alert.alert(
                          'Erreur'
                          ,'Vous devez remplir tout les champs'
                          ,[
                            {text: 'Continuer'},
                           ]
                      );
        //send request to serv
    this.Username.clear();
    this.passwordInput.clear();
    this.state.username = null;
    this.state.password = null;
    SyncStorage.set('USERNAME', username);
    this.props.navigation.navigate('App');
}
  GoogleSignIn = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    const result = await Expo.Google.logInAsync({
        androidClientId: "218486788454-is3b9o2utppp7mfjonuhnd9v2kp74ve9.apps.googleusercontent.com",
        iosClientId: "218486788454-is3b9o2utppp7mfjonuhnd9v2kp74ve9.apps.googleusercontent.com",
        behavior: 'web',
        scopes: ["profile", "email", "https://mail.google.com/", "https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/spreadsheets"]
      })
      if (result.type === "success") {
        var google_token = result.accessToken;
        var username = result.user.name
        SyncStorage.set('USERNAME', username);
        this.props.navigation.navigate('App');
      } 
      else
        console.log("cancelled")   
    }

        HandleTwitchURL = async ({url}) => {
            const token = url.split('expo-auth-session#access_token=')[1];
         };
    
        TwitchSignIn = async () => {
            Linking.addEventListener('url', this.HandleTwitchURL);

            const redirectUrl = AuthSession.getRedirectUrl();
            const url = `${opts.authorization_endpoint}?response_type=${encodeURIComponent(
                opts.response_type
            )}&client_id=${encodeURIComponent(opts.client_id)}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent('user_follows_edit user_read')}`;
            const result = await AuthSession.startAsync({authUrl: url});
            if (result.type === "success")
                var token =  result.params.access_token
                //access_token_to_serv
        };

        HandleOneDriveURL = async ({url}) => {
            const token = url.split('expo-auth-session#access_token=')[1];
        };
    
        OneDriveSignIn = async () => {
            Linking.addEventListener('url', this.HandleOneDriveURL);

            const redirectUrl = AuthSession.getRedirectUrl();
            const url = `${opts_drive.authorization_endpoint}?client_id=${encodeURIComponent(opts_drive.client_id)}&scope=${encodeURIComponent('Files.ReadWrite.All')}&response_type=${encodeURIComponent(opts_drive.response_type)}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
            const result = await AuthSession.startAsync({authUrl: url});
            if (result.type === "success")
                var token =  result.params.access_token
                //access_token_to_serv
        };

  }
  const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      width: 150,
      height: 150,
    },
    title: {
      color: 'black',
      marginTop: 20,
      marginBottom: 20,
      width: 160,
      opacity: 0.9,
      textAlign: 'center',
      fontSize: 30
    }
  })

  const styles = StyleSheet.create({
    input: {
      height: 35,
      width: 220,
      backgroundColor: '#EEEEEE',
      marginBottom: 20,
      color: 'black',
      paddingHorizontal: 10,
    },
    buttonContainer: {
      backgroundColor: '#D50000',
      padding: 12,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 30
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700',
      fontSize: 16
    },
    googleContainer: {
      backgroundColor: '#CD4436',
      marginTop: 20,
      padding: 12,
      paddingRight: 30,
      paddingLeft: 30,
      borderRadius: 30
    }
});

export default LoginScreen
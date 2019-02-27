import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';
import SyncStorage from 'sync-storage';
import {AuthSession} from 'expo'
import Icon3 from 'react-native-vector-icons/AntDesign'

class LoginScreen extends React.Component {
    state = {
            username: null,
            password: null,
            result: null,
        };
        
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
            <View style={loginStyles.logoContainer}>
              <Icon3 name="API" color={'black'} size={120} />
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
      height: 40,
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
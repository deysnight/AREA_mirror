import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';
import SyncStorage from 'sync-storage';
import {AuthSession} from 'expo'
import Icon3 from 'react-native-vector-icons/AntDesign'
import {decode as atob, encode as btoa} from 'base-64'
import syncStorage from 'sync-storage';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.request = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,

    };
  }
    state = {
      username: null,
      password: null,
      result: null,
    }

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
EncryptPass = (pass1) => {
  var hash = 0, i, chr;
    for (i = 0; i < pass1.length; i++) {
        chr = pass1.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
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
    var data = btoa(username + ':' + this.EncryptPass(password));
    console.log(data);
    const url = "http://10.18.207.159:8080/internal/login/" + data;
    this.setState({ loading: true });
    fetch(url, {
         method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({refreshing: false});
        this.setState({
          data: res.data,
          error: res.error || null,
          loading: false,
          refreshing: false
        });

        if (res.reason === "login or user incorrect")
          return Alert.alert(
                          'Erreur'
                          ,'Vos données de connexion sont incorrectes'
                          ,[
                            {text: 'Continuer'},
                           ]
                      );
        else if (res.reason === "account require email validation")
          return Alert.alert(
                          'Erreur'
                          ,'Vous devez valider votre email'
                          ,[
                            {text: 'Continuer'},
                           ]
                      );
        if (res.success === true) {
          this.Username.clear();
          this.passwordInput.clear();
          this.state.username = null;
          this.state.password = null;
          SyncStorage.set('USERNAME', username);
          //SyncStorage.set('ID', ID);
          this.props.navigation.navigate('App');
        }
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
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
        console.log(result);
        var google_token = result.accessToken;
        var id_token = result.idToken;
        var username = result.user.name;
        var email = result.user.email;
        SyncStorage.set('USERNAME', username);
        console.log(id_token);
        console.log(username);
        console.log(email);
        const url = "http://10.18.207.159:8080/internal/goauth2"
        this.setState({ loading: true });
        await fetch(url, {
            method: 'POST',
            headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
           }),
          body: "user_id_token=" + id_token + "&user_name=" + username + "&user_email=" + email
          })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({
              status: res.status,
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
        const url2 = "http://10.18.207.159:8080/internal/oauth2/google/?token=" + google_token;
        this.setState({ loading: true });
        fetch(url2, {
            method: 'GET',
            credentials: "same-origin",
            headers: {
              Cookie: "user_id=" + 20
          },
         })
         .then(res => res.json())
         .then(res => {
           console.log(res);
           this.setState({refreshing: false});
           this.setState({
             data: res.data,
             error: res.error || null,
             loading: false,
             refreshing: false
           });
           if (res.success === true) {
             this.Username.clear();
             this.passwordInput.clear();
             this.state.username = null;
             this.state.password = null;
             SyncStorage.set('USERNAME', username);
             //SyncStorage.set('USER_ID', ID_RECU_PENDANT_LE_LOGIN);
             this.props.navigation.navigate('App');
           }
         })
         .catch(error => {
           this.setState({ error, loading: false });
         });
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
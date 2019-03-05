import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, View, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign'
import {encode as btoa} from 'base-64'
import SyncStorage from 'sync-storage';

class SignupScreen extends React.Component {

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
    email: null,
    password1: null,
    password2: null,
    result: null
  };

  EncryptPass = (pass1) => {
    var hash = 0, i, chr;
    for (i = 0; i < pass1.length; i++) {
      chr = pass1.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={loginStyles.logoContainer}>
      <Icon3 name="API" color={'black'} size={120} />
      <Text style={loginStyles.title}>AREA</Text>
      <TextInput 
      placeholder="Pseudo"
      placeholderTextColor="rgba(0, 0, 0, 0.7)"
      autoCorrect={false}
      style={styles.input}
      returnKeyType="next"
      onSubmitEditing={() => this.Email.focus()}
      ref={input => { this.Pseudo = input }}
      onChangeText={(username) => this.setState({username})}
      />
      <TextInput
      placeholder="Email"
      keyboardType="email-address"
      textContentType="emailAddress"
      placeholderTextColor="rgba(0, 0, 0, 0.7)"
      style={styles.input}
      returnKeyType="next"
      onSubmitEditing={() => this.Password1.focus()}
      ref={input => { this.Email = input }}
      onChangeText={(email) => this.setState({email})}
      />
      <TextInput
      placeholder="Mot de passe"
      placeholderTextColor="rgba(0, 0, 0, 0.7)"
      secureTextEntry
      style={styles.input}
      returnKeyType="next"
      onSubmitEditing={() => this.Password2.focus()}
      ref={input => { this.Password1 = input }}
      onChangeText={(password1) => this.setState({password1})}
      />
      <TextInput
      placeholder="Confirmer mot de passe"
      placeholderTextColor="rgba(0, 0, 0, 0.7)"
      secureTextEntry
      returnKeyType="send"
      style={styles.input}
      onSubmitEditing={(event) => this.CreateAccount(event)}
      ref={input => { this.Password2 = input }}
      onChangeText={(password2) => this.setState({password2})}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={this.CreateAccount}>
      <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      );
    }

    CreateAccount = () => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      username = this.state.username;
      email = this.state.email;
      password1 = this.state.password1;
      password2 = this.state.password2;
      if (!username || !email || !password1 || !password2)
        return Alert.alert(
          'Erreur'
          ,'Vous devez remplir tout les champs'
          ,[
          {text: 'Continuer'},
          ]
          );
      if (!reg.test(email))
        return Alert.alert(
          'Erreur'
          ,'Votre adresse email est incorrecte'
          ,[
          {text: 'Continuer'},
          ]
          );
      if (username.length < 6)
        return Alert.alert(
          'Erreur'
          ,'Votre nom de compte est trop court'
          ,[
          {text: 'Continuer'},
          ]
          );
      if (password1.length < 8)
        return Alert.alert(
          'Erreur'
          ,'Votre mot de passe est trop court'
          ,[
          {text: 'Continuer'},
          ]
          );
      if (password1 !== password2)
        return Alert.alert(
          'Erreur'
          ,'Vos mots de passe ne correspondent pas'
          ,[
          {text: 'Continuer'},
          ]
          );
        //send request to serv
        var data = btoa(username + ':' + email + ':' + this.EncryptPass(password1));
        const url = "http://" + SyncStorage.get("IP") + ":8080/internal/signup/" + data;
        this.setState({ loading: true });
        fetch(url, {
         method: 'GET',
       })
        .then(res => res.json())
        .then(res => {
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
          if (res.reason === "login already exist")
            return Alert.alert(
              'Erreur'
              ,'Pseudo déjà utilisé'
              ,[
              {text: 'Continuer'},
              ]
              );
          if (res.reason === "email already exist")
            return Alert.alert(
              'Erreur'
              ,'Email déjà utilisé'
              ,[
              {text: 'Continuer'},
              ]
              );
          if (res.success === true) {
            this.Pseudo.clear();
            this.Email.clear();
            this.Password1.clear();
            this.Password2.clear();
            this.state.username = null;
            this.state.email = null;
            this.state.password1 = null;
            this.state.password2 = null;
            Alert.alert(
              'Compte créé'
              ,'Votre compte à été crée avec succès'
              ,[
              {text: 'Continuer'},
              ]
              );
            this.props.navigation.navigate('Login');
          }
        })}
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
        }
      });

      export default SignupScreen
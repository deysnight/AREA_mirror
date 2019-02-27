import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign'

class SignupScreen extends React.Component {
    state = {
        username: null,
        email: null,
        password1: null,
        password2: null,
        result: null
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
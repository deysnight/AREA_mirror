import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign'
import SyncStorage from 'sync-storage';

class IpScreen extends React.Component {
  
  state = {
    IP: null,
  }
  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container} onPress={Keyboard.dismiss}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={loginStyles.logoContainer}>
      <Icon3 name="API" color={'black'} size={120} />
      <Text style={loginStyles.title}>AREA</Text>
      <TextInput 
      placeholder="IP"
      placeholderTextColor="rgba(0, 0, 0, 0.7)"
      autoCorrect={false}
      style={styles.input}
      ref={(input) => this.IP = input}
      onChangeText={(IP) => this.setState({IP})}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={this.getIP}>
      <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      );
    }
    getIP = () => {
      var IP = this.state.IP;
      SyncStorage.set('IP', IP);
      this.IP.clear();
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

  export default IpScreen
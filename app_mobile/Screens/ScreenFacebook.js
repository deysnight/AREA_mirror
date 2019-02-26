import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';


class ScreenFacebook extends React.Component {
    state = {
        username: null,
        email: null,
        password1: null,
        password2: null,
        result: null
    };
    render() {
        return (
            <View>
                <Text>Facebook Login</Text>
                <Button title="Go back" onPress={() => this.props.navigation.navigate('App')} />
            </View>
    );
  }
}
export default ScreenFacebook
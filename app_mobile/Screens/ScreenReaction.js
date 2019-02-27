import React, { Component } from 'react';
import { Text, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';

// FAIRE UNE REQUEST POUR GET LES TOKENS
// SI ON A PAS FB ON GRISE SA REACTION ET ON LA REND NON CLICKABLE

class ScreenReaction extends React.Component {
    state = {
        google: null,
        facebook: null,
        twitch: null,
        onedrive: null
    };

    render() {
        const { navigation } = this.props;
        const id_reaction = navigation.getParam('id_reaction', null);
        return (
            <View style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#F6F6F6'}}>
                <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2, paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Ajouter une REAction</Text>
                </View>
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Text>{id_reaction}</Text>
                </View>
                <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#F6F6F6", borderTopColor: 'grey', borderTopWidth: 1}}
                onPress={() => this.props.navigation.navigate('Area')}>
                    <Text style={{textAlign: 'center', color: 'black', fontSize: 19}}>Retour</Text>
                </TouchableOpacity>
            </View>
    );
  }
}
export default ScreenReaction
import React, { Component } from 'react';
import { Text, Button, StatusBar, StyleSheet, View, Image, Linking, TextInput, TouchableOpacity, Alert } from 'react-native';
import {AuthSession} from 'expo'
import SyncStorage from 'sync-storage';

class ScreenOauth extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      
    };
  }

  opts = {
    authorization_endpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
    response_type: 'token',
    client_id: '4eiqmev2qb0pzztqiv626547o78m17'
  };
  
  opts_drive = {
    authorization_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    response_type: 'token',
    client_id: '9d1f0555-d6d2-4e41-aaae-8a661a8dd511'
  };

  FacebookSignIn = async () => {
    try {
      const {
        type,
        token,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('411072423035343', {
        permissions: ['public_profile', 'email'],
      });
      var url = "http://" + SyncStorage.get("IP") + ":8080/internal/oauth2/facebook/?token=" + token;
      this.setState({ loading: true });
      fetch(url, {
        method: 'GET',
        credentials: "same-origin",
        headers: {
          Cookie: "user_id=" + 21
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
         this.props.navigation.navigate('Area');
       }
     })
      .catch(error => {
       this.setState({ error, loading: false });
     });    
      
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
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
      var url = "http://" + SyncStorage.get("IP") + ":8080/internal/oauth2/google/?token=" + google_token;
      this.setState({ loading: true });
      fetch(url, {
        method: 'GET',
        credentials: "same-origin",
        headers: {
          Cookie: "user_id=" + 21
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
         this.props.navigation.navigate('Area');
       }
     })
      .catch(error => {
       this.setState({ error, loading: false });
     });
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
    const url = `${this.opts.authorization_endpoint}?response_type=${encodeURIComponent(this.opts.response_type)}&client_id=${encodeURIComponent(this.opts.client_id)}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent('user_follows_edit user_read')}`;
    const result = await AuthSession.startAsync({authUrl: url});
    if (result.type === "success")
      var token =  result.params.access_token;
    var url2 = "http://" + SyncStorage.get("IP") + ":8080/internal/oauth2/twitch/?token=" + token;
    this.setState({ loading: true });
    fetch(url2, {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        Cookie: "user_id=" + 21
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
       this.props.navigation.navigate('Area');
     }
   })
    .catch(error => {
     this.setState({ error, loading: false });
   });
  };

  HandleOneDriveURL = async ({url}) => {
    const token = url.split('expo-auth-session#access_token=')[1];
  };

  OneDriveSignIn = async () => {
    Linking.addEventListener('url', this.HandleOneDriveURL);

    const redirectUrl = AuthSession.getRedirectUrl();
    const url = `${this.opts_drive.authorization_endpoint}?client_id=${encodeURIComponent(this.opts_drive.client_id)}&scope=${encodeURIComponent('Files.ReadWrite.All')}&response_type=${encodeURIComponent(this.opts_drive.response_type)}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    const result = await AuthSession.startAsync({authUrl: url});
    if (result.type === "success")
      var token =  result.params.access_token;
    var url2 = "http://" + SyncStorage.get("IP") + ":8080/internal/oauth2/onedrive/?token=" + token;
    this.setState({ loading: true });
    fetch(url2, {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        Cookie: "user_id=" + 21
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
       this.props.navigation.navigate('Area');
     }
   })
    .catch(error => {
     this.setState({ error, loading: false });
   });
  };

  render() {
    const { navigation } = this.props;
    const Type = navigation.getParam('type', null);
    return (
      <View style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#F6F6F6'}}>
      <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2, paddingLeft: 10, paddingRight: 10}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Se connecter avec {Type}</Text>
      </View>
      <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
      { Type === 'Google' ?
      <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#D54C3F"}}
      onPress={this.GoogleSignIn}>
      <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>Se connecter via Google</Text>
      </TouchableOpacity>
      :
      null }
      { Type === 'Facebook' ?
      <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#4267B2"}}
      onPress={this.FacebookSignIn}>
      <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>Se connecter via Facebook</Text>
      </TouchableOpacity>
      :
      null }
      { Type === 'Twitch' ?
      <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#4B367C"}} 
      onPress={this.TwitchSignIn}>
      <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>Se connecter via Twitch</Text>
      </TouchableOpacity> 
      :
      null }
      { Type === 'OneDrive' ?
      <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#094AB2"}}
      onPress={this.OneDriveSignIn}>
      <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>Se connecter via OneDrive</Text>
      </TouchableOpacity>
      :
      null }
      </View>
      <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#F6F6F6", borderTopColor: 'grey', borderTopWidth: 1}}
      onPress={() => this.props.navigation.navigate('App')}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 19}}>Retour</Text>
      </TouchableOpacity>
      </View>
      );
  }
}
export default ScreenOauth
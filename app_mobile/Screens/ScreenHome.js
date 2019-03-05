import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import SyncStorage from 'sync-storage';

class ViewHome extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            google: null,
            facebook: null,
            twitch: null,
            onedrive: null
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = "http://" + SyncStorage.get('IP') + ":8080/internal/oauth2/token/21" //+ SyncStorage.get("USER_ID");
        this.setState({ loading: true });
        result = fetch(url, {
           method: 'GET',
       })
        .then(result => result.json())
        .then(result => {
            this.setState({refreshing: false});
            this.setState({
                google: result[0].google,
                facebook: result[0].facebook,
                twitch: result[0].twitch,
                onedrive: result[0].onedrive
            });
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });
    };

    getLoggedGoogle = () => {
        if (this.state.google)
            this.props.navigation.navigate('Area');
        else
            this.props.navigation.navigate('Oauth2', {type: "Google"})
    }

    getLoggedFacebook = () => {
        if (this.state.facebook)
            this.props.navigation.navigate('Area');
        else
            this.props.navigation.navigate('Oauth2', {type: "Facebook"})
    }

    getLoggedTwitch = () => {
        if (this.state.twitch)
            this.props.navigation.navigate('Area');
        else
            this.props.navigation.navigate('Oauth2', {type: "Twitch"})
    }

    getLoggedOneDrive = () => {
        if (this.state.onedrive)
            this.props.navigation.navigate('Area');
        else
            this.props.navigation.navigate('Oauth2', {type: "OneDrive"})
    }

    render() {
        return (
            <View style={homePage.Container}>
            <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Selectionner un service</Text>
            </View>
            <View style={{alignSelf: 'center', flex: 8}}>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={this.getLoggedGoogle} style={homePage.YtbCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon name={"youtube-play"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.getLoggedFacebook} style={homePage.FbCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon name={"facebook-square"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Facebook</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.getLoggedTwitch} style={homePage.TwCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon name={"twitch"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.getLoggedOneDrive} style={homePage.OnedCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon2 name={"onedrive"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>OneDrive</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.getLoggedGoogle} style={homePage.GdriveCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon2 name={"google-drive"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Drive</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.getLoggedGoogle} style={homePage.GSheetCard}>
            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
            <Icon name={"file-text"}
            size={80}
            color={'white'}
            />
            </View>
            <View style={{flex: 3, justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Sheet</Text>
            </View>
            </TouchableOpacity>
            </ScrollView>
            </View>
            </View>
            );
        }
    }

    const homePage = StyleSheet.create({
        Container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#F6F6F6'
        },

        YtbCard: {
            alignSelf: 'center',
            backgroundColor: '#FF0000',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },

        FbCard: {
            alignSelf: 'center',
            backgroundColor: '#4267B2',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },

        TwCard: {
            alignSelf: 'center',
            backgroundColor: '#4B367C',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },

        OnedCard: {
            alignSelf: 'center',
            backgroundColor: '#0948AC',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },
        GdriveCard: {
            alignSelf: 'center',
            backgroundColor: '#1AA15F',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },
        GSheetCard: {
            alignSelf: 'center',
            backgroundColor: '#0A9E58',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        },
        TwitterCard: {
            alignSelf: 'center',
            backgroundColor: '#1DA1F2',
            height: 260,
            width: 180,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
            display: 'flex'
        }
    })

    export default ViewHome

import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'

class ViewHome extends Component {
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
                        <TouchableOpacity style={homePage.YtbCard}>
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
                        <TouchableOpacity style={homePage.FbCard}>
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
                        <TouchableOpacity style={homePage.TwCard}>
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
                        <TouchableOpacity style={homePage.GmailCard}>
                            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"envelope"}
                                size={80}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 3, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Gmail</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={homePage.OnedCard}>
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
                        <TouchableOpacity style={homePage.GdriveCard}>
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
                        <TouchableOpacity style={homePage.GSheetCard}>
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
                        <TouchableOpacity style={homePage.TwitterCard}>
                            <View style={{flex: 5, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"twitter"}
                                size={80}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 3, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitter</Text>
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

    GmailCard: {
        alignSelf: 'center',
        backgroundColor: '#D93025',
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

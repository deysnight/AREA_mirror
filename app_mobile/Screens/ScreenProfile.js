import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, RefreshControl} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon2 from 'react-native-vector-icons/Entypo'


var user_config = {
    "cards": [
        {"is_active" : false}, // yt1_gdrive ok 0
        {"is_active" : false, "url_video" : null}, // yt2_mail ok 1
        {"is_active" : false, "id_chaine" : null}, // yt3_mail ok 2
        {"is_active" : false, "id_page" : null}, // fb1_gdrive ok 3
        {"is_active" : false}, // fb2_mail ok 4
        {"is_active" : false}, // twitch1_mail ok 5
        {"is_active" : false}, // twitch2_mail ok 6
        {"is_active" : false, "streamer" : null}, // twitch3_mail ok 7
        {"is_active" : false}, // gmail1 ok 8
        {"is_active" : false}, // onedrive1_mail ok 9
        {"is_active" : false}, // gdrive1_mail ok 10
    ]
}

class ViewProfile extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          error: null,
          refreshing: false,
        };
      }
    
      _onRefresh = () => {
        this.setState({refreshing: true});
        //make request for getting user_config
        this.setState({refreshing: false});
    }

      componentDidMount() {
        //make request for getting user_config
      }

    render() {
        return (
            <View style={homePage.Container}>
            <View style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', flex: 2}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Votre profil</Text>
            </View>
            <View style={{flex: 8}}>
                <ScrollView style={{flex: 1}}
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>}
                showsVerticalScrollIndicator={false}>
                <Grid>
                    <Col style={{marginRight: 5}}>
                        {user_config.cards[0].is_active == true ? 
                            <TouchableOpacity style={homePage.YtbCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
                                </View>
                            </View>
                             }
                            
                            {user_config.cards[2].is_active == true ? 
                            <TouchableOpacity style={homePage.YtbCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube 1</Text>
                                </View>
                            </View>
                             }

                            {user_config.cards[4].is_active == true ?
                            <TouchableOpacity style={homePage.FbCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"facebook-square"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"facebook-square"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Facebook</Text>
                                </View>
                            </View>
                            }


                            {user_config.cards[6].is_active == true ?
                            <TouchableOpacity style={homePage.TwCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"twitch"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"twitch"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                                </View>
                            </View>
                             }

                            {user_config.cards[8].is_active == true ?
                            <TouchableOpacity style={homePage.GmailCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"envelope"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Gmail</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"envelope"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Gmail</Text>
                                </View>
                            </View>
                            }

                            {user_config.cards[10].is_active == true ?
                            <TouchableOpacity style={homePage.GdriveCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon2 name={"google-drive"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Drive</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon2 name={"google-drive"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Drive</Text>
                                </View>
                            </View>
                            }
                    </Col>


                    <Col style={{marginLeft: 5}}>
                        {user_config.cards[1].is_active == true ? 
                            <TouchableOpacity style={homePage.YtbCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"youtube-play"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Youtube</Text>
                                </View>
                            </View>
                             }

                        {user_config.cards[3].is_active == true ? 
                        <TouchableOpacity style={homePage.FbCard}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"facebook-square"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        : 
                         <View style={homePage.DisabledOne}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"facebook-square"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Facebook</Text>
                            </View>
                        </View>
                        }


                        {user_config.cards[5].is_active == true ? 
                        <TouchableOpacity style={homePage.TwCard}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"twitch"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                            </View>
                        </TouchableOpacity>
                        : 
                        <View style={homePage.DisabledOne}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"twitch"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                            </View>
                        </View>
                        }

                        {user_config.cards[7].is_active == true ?
                        <TouchableOpacity style={homePage.TwCard}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"twitch"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                            </View>
                        </TouchableOpacity>
                        : 
                        <View style={homePage.DisabledOne}>
                            <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                <Icon name={"twitch"}
                                size={50}
                                color={'white'}
                                />
                            </View>
                            <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>Twitch</Text>
                            </View>
                        </View>
                        }
                        
                        {user_config.cards[9].is_active == true ?
                            <TouchableOpacity style={homePage.OnedCard}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"cloud"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>OneDrive</Text>
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={homePage.DisabledOne}>
                                <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                                    <Icon name={"cloud"}
                                    size={50}
                                    color={'white'}
                                    />
                                </View>
                                <View style={{flex: 5, justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', color:'white'}}>OneDrive</Text>
                                </View>
                            </View>
                        }
                    </Col>
                </Grid>
                </ScrollView>
            </View>
        </View>
        );
    }
}

const homePage = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },

    YtbCard: {
        alignSelf: 'center',
        backgroundColor: '#FF0000',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },

    FbCard: {
        alignSelf: 'center',
        backgroundColor: '#4267B2',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },

    TwCard: {
        alignSelf: 'center',
        backgroundColor: '#4B367C',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },

    GmailCard: {
        alignSelf: 'center',
        backgroundColor: '#D93025',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },

    OnedCard: {
        alignSelf: 'center',
        backgroundColor: '#0948AC',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    }, 

    GdriveCard: {
        alignSelf: 'center',
        backgroundColor: '#1AA15F',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },

    GSheetCard: {
        alignSelf: 'center',
        backgroundColor: '#0A9E58',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'
    },
    DisabledOne: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        height: 200,
        width: 160,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex'    }
})

export default ViewProfile

import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, RefreshControl} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import GridView from 'react-native-super-grid';

class ViewProfile extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: {
            "success": true,
            "reason": null,
            "data": [
                {
                    "id": 2,
                    "user_id": 3,
                    "action_id": 1,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 6,
                    "user_id": 3,
                    "action_id": 2,
                    "reaction_id": 2,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 2,
                    "user_id": 3,
                    "action_id": 3,
                    "reaction_id": 3,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 6,
                    "user_id": 3,
                    "action_id": 4,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 2,
                    "user_id": 3,
                    "action_id": 5,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 6,
                    "user_id": 3,
                    "action_id": 6,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 2,
                    "user_id": 3,
                    "action_id": 7,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 6,
                    "user_id": 3,
                    "action_id": 8,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 2,
                    "user_id": 3,
                    "action_id": 9,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 1008,
                    "user_id": 3,
                    "action_id": 10,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 1009,
                    "user_id": 3,
                    "action_id": 11,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
                {
                    "id": 1010,
                    "user_id": 3,
                    "action_id": 12,
                    "reaction_id": 1,
                    "timer_area": null,
                    "p_video_id": null,
                    "p_page_id": null,
                    "p_fbpage_id": null,
                    "p_ytb_name": null,
                    "p_streamer": null
                },
            ]
        },
          error: null,
          refreshing: false,
        };
      }
    
      delete_area = (id) => {
          // send request to delete a card with id in param
      }
    
    create_card = (i) => {
        var lulz = this.state.data.data[i];
        var card_type = null;
        var icon_main = null;
        var icon_second = null;
        if (lulz.action_id === 1 || lulz.action_id === 2 || lulz.action_id === 3) {
            card_type = "YtbCard";
            icon_main = "youtube-play";
        }
        if (lulz.action_id === 4 || lulz.action_id === 5 || lulz.action_id === 6) {
            card_type = "FbCard";
            icon_main = "facebook-square";
        }
        if (lulz.action_id === 7 || lulz.action_id === 8 || lulz.action_id === 9) {
            card_type = "TwCard";
            icon_main = "twitch";
        }
        if (lulz.action_id === 10) {
            card_type = "OnedCard";
            icon_main = "cloud";
        }
        if (lulz.action_id === 11) {
            card_type = "GdriveCard";
            icon_main = "hdd-o";
        }
        if (lulz.action_id === 12) {
            card_type = "GSheetCard";
            icon_main = "file-text";
        }

        if (lulz.action_id === 1)
            var desc = "Augmentation du nombre d'abonnés sur Youtube"
        if (lulz.action_id === 2)
            var desc = "Like ou Dislike d'une vidéo Youtube"
        if (lulz.action_id === 3)
            var desc = "Nouvelle vidéo de votre youtuber favoris"
        if (lulz.action_id === 4)
            var desc = "Gain de fan sur votre page Facebook"
        if (lulz.action_id === 5)
            var desc = "Création d'une nouvelle page Facebook"
        if (lulz.action_id === 6)
            var desc = "Nouveau post sur votre mur Facebook"
        if (lulz.action_id === 7)
            var desc = "Nouvelle chaîne follow sur Twitch"
        if (lulz.action_id === 8)
            var desc = "Gain de follower sur Twitch"
        if (lulz.action_id === 9)
            var desc = "Passage live de votre streamer favoris"
        if (lulz.action_id === 10)
            var desc = "Nouveau partage de fichier avec vous"
        if (lulz.action_id === 11)
            var desc = "Nouvel upload de fichier sur votre Google Drive"
        if (lulz.action_id === 12)
            var desc = "Nouvel upload de fichier sur votre Drive Google Sheet"

        if (lulz.reaction_id === 1)
            icon_second = "envelope";
        if (lulz.reaction_id === 2)
            icon_second = "file-text";
        if (lulz.reaction_id === 3)
            icon_second = "facebook-square";
        return (
            <TouchableOpacity style={homePage[card_type]}>
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                    <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                        <Icon name={[icon_main]}
                            size={40}
                            color={'white'}
                            />
                    </View>
                    <View style={{flex: 4, justifyContent: 'space-between', alignSelf: 'center'}}>
                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>{desc}</Text>
                        <TouchableOpacity 
                        onPress={() => this.delete_area(lulz.id)}
                        style={{borderRadius: 30, backgroundColor: "#D50000", fontSize: 13, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6}}>
                            <Text style={{color: "white", textAlign: "center"}}>Supprimer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                        <Icon name={[icon_second]}
                            size={25}
                            color={'white'}
                            />
                    </View>
                </View>
            </TouchableOpacity>
        )
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
        const items = this.state.data.data;
        return (
          <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
            <View style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', paddingTop: 60, paddingBottom: 20}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Mon profil</Text>
            </View>
            <GridView
                itemDimension={130}
                items={items}
                style={homePage.gridView}
                renderItem={({ item, index }) => (
                    <View style={{alignSelf: 'center', height: 240, width: 160, borderRadius: 8, marginTop: 5, marginBottom: 5, display: 'flex'}}>
                        {this.create_card(index)}
                    </View>
                )}
                />
            </View>
        );
      }
    }
const homePage = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6F6F6'
    },
    gridView: { 
        alignSelf: 'flex-start',
        flex: 8,
    },
    YtbCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#FF0000',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    },

    FbCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#4267B2',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    },

    TwCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#4B367C',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    },

    OnedCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#0948AC',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    }, 

    GdriveCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#1AA15F',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    },

    GSheetCard: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        backgroundColor: '#0A9E58',
        height: 240,
        width: 160,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex'
    }
})

export default ViewProfile

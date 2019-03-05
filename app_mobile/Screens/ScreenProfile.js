import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, RefreshControl, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import GridView from 'react-native-super-grid';
import SyncStorage from 'sync-storage';

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


  componentDidMount() {
    this.setState({ loading: true }, () => this.makeRemoteRequest())  
}

makeRemoteRequest = async () => {
        const url = "http://" + SyncStorage.get('IP') + ":8080/internal/area/21"; //SyncStorage.get("USER_ID");
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            if (result.success === true) {
                this.setState({data: result.data, error: result.error || null, loading: false, refreshing: false});
            }
            else {
                this.setState({data: "nothing", error: result.error || null, loading: false, refreshing: false});
            }
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };
    
    delete_area = async (id) => {
        this.setState({ loading: true })
        const url = "http://" + SyncStorage.get('IP') + ":8080/internal/area/21/" + id ; //SyncStorage.get("USER_ID");
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            })            
            const result = await response.json();
            console.log(result);
            this.setState(
            {
               loading: false,
               refreshing: false,
           },
           );
        } catch (error) {
         this.setState({ error, loading: false });
     }

     this.setState({refreshing: true});
     this.makeRemoteRequest();
     this.setState({refreshing: false});
 }
 
 create_card = (item) => {

    var lulz = item;
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
        this.makeRemoteRequest();
        this.setState({refreshing: false});
    }

    render() {
        const items = this.state.data;
        return (
        <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <View style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', paddingTop: 60, paddingBottom: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Mon profil</Text>
        </View>
        {this.state.data != "nothing" ?
        <GridView refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />
        }
        itemDimension={130}
        items={items}
        style={homePage.gridView}
        renderItem={({ item, index }) => (
        <View style={{alignSelf: 'center', height: 240, width: 160, borderRadius: 8, marginTop: 5, marginBottom: 5, display: 'flex'}}>
        {this.create_card(item)}
        </View>
        )}
        />
        :
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}
        refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>}
        >
        <Text style={{alignSelf: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 'bold'}}>No Data</Text>
        </ScrollView>
    }
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
        alignSelf: 'stretch',
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

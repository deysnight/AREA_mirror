import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// FAIRE UNE REQUEST POUR GET LES TOKENS
// SI ON A PAS FB ON GRISE SA REACTION ET ON LA REND NON CLICKABLE

class ScreenReaction extends React.Component {
    state = {
        google: "null",
        facebook: "null",
        twitch: "null",
        onedrive: "null"
    };

    getReaction = (id_action) => {
        if (id_action === 1 || id_action === 2 || id_action === 4 || id_action === 5 || id_action === 6 || id_action === 7 || id_action === 8 || id_action === 10)
            return (
                <View style={{alignSelf: 'center', justifyContent: 'space-around', flex: 8}}>
                    <TouchableOpacity
                    style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'black', borderWidth: 1}}
                    onPress={() => this.props.navigation.navigate('Formulaire', {id_action: id_action, id_reaction: 1})}>
                        <Icon name={"envelope"}
                            size={40}
                            color={'black'}
                            />
                    </TouchableOpacity>
                    { this.state.google ?
                        <TouchableOpacity
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'black', borderWidth: 1}}
                        onPress={() => this.props.navigation.navigate('Formulaire', {id_action: id_action, id_reaction: 2})}>
                            <Icon name={"file-text"}
                            size={40}
                            color={'black'}
                            />
                        </TouchableOpacity>
                    :
                        <View
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'grey', borderWidth: 1}}
                        >
                            <Icon name={"file-text"}
                            size={40}
                            color={'grey'}
                            />
                        </View> 
                    }
                    { this.state.facebook ?
                        <TouchableOpacity
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'black', borderWidth: 1}}
                        onPress={() => this.props.navigation.navigate('Formulaire', {id_action: id_action, id_reaction: 3})}>
                        <Icon name={"facebook-square"}
                            size={40}
                            color={'black'}
                            />
                        </TouchableOpacity>
                    :
                        <View
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'grey', borderWidth: 1}}
                        >
                            <Icon name={"facebook-square"}
                            size={40}
                            color={'grey'}
                            />
                        </View> 
                    }
                </View>
            );

        if (id_action === 3 || id_action === 9 || id_action === 11 || id_action === 12)
            return (
                <View style={{alignSelf: 'center', justifyContent: 'space-around', flex: 8}}>
                    <TouchableOpacity
                    style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'grey', borderWidth: 1}}
                    onPress={() => this.props.navigation.navigate('Formulaire', {id_action: id_action, id_reaction: 1})}>
                        <Icon name={"envelope"}
                        size={40}
                        color={'black'}
                        />
                    </TouchableOpacity>
                    <View
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'grey', borderWidth: 1}}
                        >
                            <Icon name={"file-text"}
                            size={40}
                            color={'grey'}
                            />
                    </View> 
                    { this.state.facebook ?
                    <TouchableOpacity
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'black', borderWidth: 1}}
                        onPress={() => this.props.navigation.navigate('Formulaire', {id_action: id_action, id_reaction: 3})}>
                            <Icon name={"facebook-square"}
                            size={40}
                            color={'black'}
                            />
                    </TouchableOpacity>
                    :
                    <View
                        style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, borderColor: 'grey', borderWidth: 1}}
                    >
                            <Icon name={"facebook-square"}
                            size={40}
                            color={'grey'}
                            />
                    </View> 
                    }
                </View>
            );
    }

    render() {
        const { navigation } = this.props;
        const id_action = navigation.getParam('id_action', null);
        return (
            <View style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#F6F6F6'}}>
                <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2, paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Ajouter une REAction</Text>
                </View>
                <View style={{alignSelf: 'center', justifyContent: 'space-between', flex: 8}}>
                    {this.getReaction(id_action)}
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
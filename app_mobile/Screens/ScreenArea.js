import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo'

class ScreenArea extends React.Component {
    state = {
        google: "null",
        facebook: "null",
        twitch: "null",
        onedrive: "null"
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#F6F6F6'}}>
                <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2, paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Choisissez une Action</Text>
                </View>
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                    { this.state.google ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20, marginLeft: 5, marginRight: 5}}
                            >
                            <TouchableOpacity style={{marginRight: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#FF0000', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 1})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"youtube-play"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Abonnement</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Augmentation du nombre d'abonnés sur Youtube</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 2, marginRight: 2, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#FF0000', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 2})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"youtube-play"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Like Vidéo</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Like ou Dislike d'une vidéo Youtube</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#FF0000', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 3})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"youtube-play"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Youtuber actif</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Nouvelle vidéo de votre youtuber favoris</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    : null }

                    { this.state.facebook ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20, marginLeft: 5, marginRight: 5}}
                            >
                            <TouchableOpacity style={{marginRight: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4267B2', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 4})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"facebook-square"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Like page</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Gain de fan sur votre page Facebook</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 2, marginRight: 2, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4267B2', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 5})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"facebook-square"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Nouvelle page</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Création d'une nouvelle page Facebook</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4267B2', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 6})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"facebook-square"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Nouveau post</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Nouveau post sur votre mur Facebook</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                        : null }

                        { this.state.twitch ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20, marginLeft: 5, marginRight: 5}}
                            >
                            <TouchableOpacity style={{marginRight: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4B367C', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 7})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"twitch"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Follow Streamer</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Nouvelle chaîne follow sur Twitch</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 2, marginRight: 2, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4B367C', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 8})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"twitch"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Nouveau follow</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Gain de follower sur Twitch</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#4B367C', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 9})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"twitch"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Streamer live</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Passage live de votre streamer favoris</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        : null }

                        { this.state.onedrive ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20}}
                            >
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#0947AD', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 10})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"cloud"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Partage fichier</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>Partage d'un fichier avec vous sur OneDrive</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"file-text"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 10, marginLeft: 10}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        : null }

                        { this.state.google ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20}}
                            >
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#1AA15F', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 11})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon2 name={"google-drive"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>Upload fichier</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>upload d'un fichier sur votre Google Drive</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        : null }

                        { this.state.google ?
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop: 20, marginBottom: 20}}
                            >
                            <TouchableOpacity style={{marginLeft: 4, paddingLeft: 15, paddingRight: 15, alignSelf: 'center', backgroundColor: '#0A9E58', height: 200, width: 160, borderRadius: 8, marginBottom: 5, display: 'flex'}}
                            onPress={() => this.props.navigation.navigate('Reaction', {id_action: 12})}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 12}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                                        <Icon name={"file-text"}
                                        size={40}
                                        color={'white'}
                                        />
                                    </View>
                                    <View style={{flex: 7}}>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 8}}>Upload fichier</Text>
                                        <Text style={{color: "white", textAlign: "center", fontSize: 13}}>upload d'un fichier sur votre Drive Google Sheet</Text>
                                    </View>
                                    <View style={{flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>
                                        <Icon name={"envelope"}
                                        size={20}
                                        color={'white'}
                                        style={{marginRight: 20}}
                                        />
                                        <Icon name={"facebook-square"}
                                        size={20}
                                        color={'white'}
                                        style={{marginLeft: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        : null }
                    </ScrollView>
                    
                </View>
            </View>
    );
  }
}
export default ScreenArea
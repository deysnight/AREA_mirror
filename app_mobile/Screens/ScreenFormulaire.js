import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Picker, KeyboardAvoidingView } from 'react-native';
import SyncStorage from 'sync-storage';

class ScreenFormulaire extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            id_action: null,
            id_reaction: null,
            user_id: 21, //SyncStorage.get("USER_ID"),
            timer_area: null,
            page_id_for_action: null,
            video_id: null,
            youtuber_name: null,
            facebook_page_id: null,
            streamer_live: null
        };
        this.data_json = {
            "id_action": "nope",
            "id_reaction": "nope",
            "user_id": 21,
            "timer_area": "nope",
            "data": {
                "page_id_for_action": "nope",
                "video_id": "nope",
                "youtuber_name": "nope",
                "facebook_page_id": "nope",
                "streamer_live": "nope"
            }
        }
      }

        

    makeRemoteRequest = () => {
        const url = "http://" + SyncStorage.get('IP') + ":8080/internal/area/";
        this.setState({ loading: true });
        fetch(url, {
             method: 'POST',
             body: JSON.stringify(this.data_json)
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
            })
        .catch(error => {
            this.setState({ error, loading: false });
        });
        this.props.navigation.navigate('Profil');
    };

    ValidateAREA = (id_action, id_reaction) => {
        this.data_json.id_action = id_action;
        this.data_json.id_reaction = id_reaction;
        if (id_reaction === 3) {
            if (this.data_json.facebook_page_id === null)
            return Alert.alert(
                'Erreur'
                ,'Vous devez remplir tout les champs'
                ,[
                  {text: 'Continuer'},
                 ]
            );
        }
        if (id_action === 2) {
            if (this.data_json.video_id === null)
            return Alert.alert(
                'Erreur'
                ,'Vous devez remplir tout les champs'
                ,[
                  {text: 'Continuer'},
                 ]
            );
        }
        if (id_action === 3) {
            if (this.data_json.youtuber_name === null)
            return Alert.alert(
                'Erreur'
                ,'Vous devez remplir tout les champs'
                ,[
                  {text: 'Continuer'},
                 ]
            );
        }
        if (id_action === 4) {
            if (this.data_json.page_id_for_action === null)
            return Alert.alert(
                'Erreur'
                ,'Vous devez remplir tout les champs'
                ,[
                  {text: 'Continuer'},
                 ]
            );
        }
        if (id_action === 9) {
            if (this.data_json.streamer_live === null)
            return Alert.alert(
                'Erreur'
                ,'Vous devez remplir tout les champs'
                ,[
                  {text: 'Continuer'},
                 ]
            );
        }
        this.makeRemoteRequest()
    }

    GenerateForm = (id_action, id_reaction) => {
        if ((id_action === 1 && id_reaction === 1) || (id_action === 1 && id_reaction === 2) || (id_action === 5 && id_reaction === 1) || (id_action === 5 && id_reaction === 2) ||
        (id_action === 6 && id_reaction === 1) || (id_action === 6 && id_reaction === 2) || (id_action === 7 && id_reaction === 1) || (id_action === 7 && id_reaction === 2) ||
        (id_action === 8 && id_reaction === 1) || (id_action === 8 && id_reaction === 2) || (id_action === 10 && id_reaction === 1) || (id_action === 10 && id_reaction === 2) ||
        (id_action === 11 && id_reaction === 1) || (id_action === 12 && id_reaction === 1)) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if ((id_action === 1 && id_reaction === 3) || (id_action === 5 && id_reaction === 3) || (id_action === 6 && id_reaction === 3) || (id_action === 7 && id_reaction === 3) ||
        (id_action === 8 && id_reaction === 3) || (id_action === 10 && id_reaction === 3) || (id_action === 11 && id_reaction === 3) || (id_action === 12 && id_reaction === 3)) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.facebook_page_id = input}
                    onChangeText={(facebook_page_id) => this.state.facebook_page_id = parseInt(facebook_page_id, 10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            ); 
        }
        else if ((id_action === 2 && id_reaction === 1) || (id_action === 2 && id_reaction === 2)) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Video_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.video_id = input}
                    onChangeText={(video_id) => this.state.video_id = video_id}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 2 && id_reaction === 3) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Video_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={(input) => this.video_id = input}
                    onChangeText={(video_id) => this.state.video_id = video_id}
                    />
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.facebook_page_id = input}
                    onChangeText={(facebook_page_id) => this.state.facebook_page_id = parseInt(facebook_page_id,10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 3 && id_reaction === 1) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Youtuber"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.youtuber_name = input}
                    onChangeText={(youtuber_name) => this.state.youtuber_name = youtuber_name}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 3 && id_reaction === 3) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Youtuber"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={(input) => this.youtuber_name = input}
                    onChangeText={(youtuber_name) => this.state.youtuber_name = youtuber_name}
                    />
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.facebook_page_id = input}
                    onChangeText={(facebook_page_id) => this.state.facebook_page_id = parseInt(facebook_page_id, 10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if ((id_action === 4 && id_reaction === 1) || (id_action === 4 && id_reaction === 2)) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page Action"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.page_id_for_action = input}
                    onChangeText={(page_id_for_action) => this.state.page_id_for_action = parseInt(page_id_for_action, 10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 4 && id_reaction === 3) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page Action"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={(input) => this.page_id_for_action = input}
                    onChangeText={(page_id_for_action) => this.state.page_id_for_action = parseInt(page_id_for_action, 10)}
                    />
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.facebook_page_id = input}
                    onChangeText={(facebook_page_id) => this.state.facebook_page_id = parseInt(facebook_page_id, 10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 9 && id_reaction === 1) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Streamer"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={(input) => this.streamer_live = input}
                    onChangeText={(streamer_live) => this.state.streamer_live = streamer_live}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (id_action === 9 && id_reaction === 3) {
            return (
                <View style={{alignSelf: 'center', justifyContent: 'center', flex: 8}}>
                    <Picker
                    selectedValue={this.state.timer_area}
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    onValueChange={(timer_area) => {this.state && this.setState({timer_area: timer_area})
                    this.data_json.timer_area = parseInt(timer_area, 10)}}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Streamer"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={(input) => this.streamer_live = input}
                    onChangeText={(streamer_live) => this.state.streamer_live = streamer_live}
                    />
                    <TextInput
                    style={{height: 60, width: 240, backgroundColor: '#EEEEEE', marginBottom: 20, color: 'black', paddingLeft: 10, paddingRight: 10}}
                    placeholder="Page_ID"
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    returnKeyType="send"
                    autoCorrect={false}
                    ref={(input) => this.facebook_page_id = input}
                    onChangeText={(facebook_page_id) => this.state.facebook_page_id = parseInt(facebook_page_id, 10)}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: '#D50000', padding: 12, paddingLeft: 30, paddingRight: 30, borderRadius: 30}}
                    onPress={() => this.ValidateAREA(id_action, id_reaction)}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        const { navigation } = this.props;
        const id_action = navigation.getParam('id_action', null);
        const id_reaction = navigation.getParam('id_reaction', null);
        return (
            <KeyboardAvoidingView behavior="padding" style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#F6F6F6'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                    <View style={{display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', flex: 2, paddingLeft: 10, paddingRight: 10}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Finalisez votre AREA</Text>
                    </View>
                    {this.GenerateForm(id_action, id_reaction)}
                    <TouchableOpacity style={{padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: "#F6F6F6", borderTopColor: 'grey', borderTopWidth: 1, alignSelf: 'stretch'}}
                        onPress={() => this.props.navigation.navigate('Reaction', {id_action: id_action})}>
                        <Text style={{textAlign: 'center', color: 'black', fontSize: 19}}>Retour</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    );
  }
}
export default ScreenFormulaire
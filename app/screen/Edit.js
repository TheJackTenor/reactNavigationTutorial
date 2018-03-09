import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { dismissModal } from '../navigationWrapper';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class Edit extends Component {

    state = {
        name: this.props.navigation.state.params.name,
        email: this.props.navigation.state.params.email,
        username: this.props.navigation.state.params.username,
        phone: this.props.navigation.state.params.phone
    }

    update = () => {
        const { _this } = this.props.navigation.state.params;
        const { name, email, username, phone } = this.state;
        _this.setState({
            name,
            email,
            username,
            phone
        });
        this.refs.successToast.show('Updated !', DURATION.SHORT)
        setTimeout(() => {
            dismissModal(this);
        },800)
    }

    render() {
        const { name, email, username, phone } = this.state;
        return (
            <View style={styles.container}>
                <Text>Name</Text>
                <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={name} onChangeText={ (name) => this.setState({name}) } />

                <Text>Username</Text>
                <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={username} onChangeText={ (username) => this.setState({username}) }/>

                <Text>Phone</Text>
                <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={phone} onChangeText={ (phone) => this.setState({phone}) }/>

                <Text>Email</Text>
                <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={email} onChangeText={ (email) => this.setState({email}) }/>

                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableHighlight style={styles.button} onPress={this.update}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={ () => dismissModal(this) } >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
                </View>
                <Toast ref="successToast" position='bottom' opacity={1} positionValue={180} textStyle={{color:'white'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        padding:15
    },
    button: {
        width:150,
        height:35,
        backgroundColor:'tomato',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30, 
        backgroundColor:'#ffc3a0',
        borderRadius:3 
    }
})
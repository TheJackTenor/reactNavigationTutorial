import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyContact extends Component {

    state={
        name: 'Dilan 1990',
        username: 'Dilan',
        phone: '085875751354',
        email: 'dilan@live.com',
        _this: this
    }

    showModal = () => {
        this.props.navigation.navigate('Edit', this.state);
    }

    render() {
        const { name, username, phone, email } = this.state;
        return (
            <View style={styles.container}>
                <Text>Name:</Text>
                <Text style={styles.text}>{name}</Text>

                <Text>Username:</Text>
                <Text style={styles.text}>{username}</Text>

                <Text>Phone:</Text>
                <Text style={styles.text}>{phone}</Text>

                <Text>Email:</Text>
                <Text style={styles.text}>{email}</Text>

                <TouchableHighlight style={styles.button} onPress={this.showModal}>
                        <Text style={styles.buttonText}>Edit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        paddingBottom: 20
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
    }
});
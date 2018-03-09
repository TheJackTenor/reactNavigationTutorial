import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ContactDetail extends Component {
    render() {
        const { name, email, username, phone } = this.props.navigation.state.params;
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
    }
})
import React, { Component } from 'react';
import { ScrollView, Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import { apiCB } from '../api'; 
import { ListItem, List } from 'react-native-elements'


export default class ContactLists extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
            isLoading: false
        }
    }

    componentDidMount(){
      apiCB(this);
    }

    details = (user) => {
        this.props.navigation.navigate('ContactDetail', {...user})
    }    

    render() {
        const { dataSource } = this.state;
        return (
            <View style={styles.container}>
                {this.state.isLoading && <ActivityIndicator size="large" color="tomato" />}
            {!this.state.isLoading && <ScrollView>
            <List>
              {dataSource.map((user) => (
                  <ListItem
                  key={user.id}              
                  title={user.name}
                  subtitle={user.email}
                  onPress={() => this.details(user)}
                />
              ))}
            </List>
          </ScrollView>}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    }
})
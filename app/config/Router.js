import React from 'react';

import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ContactLists from '../screen/ContactLists';
import MyContact from '../screen/MyContact';
import ContactDetail from '../screen/ContactDetail';
import Edit from '../screen/Edit';


const ContactListStack = StackNavigator({
    ContactLists: {
        screen: ContactLists,
        navigationOptions: {
            title: 'Contact Lists' 
        }
    },
    ContactDetail: {
        screen: ContactDetail,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.name + " Detail"
        })
    }
});

const Tabs = TabNavigator({
    ContactLists: {
        screen: ContactListStack,
        navigationOptions: {
            tabBarLabel: 'Contact Lists',
            tabBarIcon: ({tintColor}) => <Icon name='people' size={30} color={tintColor} />
        }
    },
    MyContact: {
        screen: MyContact,
        navigationOptions: {
            tabBarLabel: 'My Contact',
            tabBarIcon: ({tintColor}) => <Icon name='perm-contact-calendar' size={30} color={tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
})

const EditModal = StackNavigator({
    Edit: {
        screen: Edit,
        navigationOptions: {
            title: 'Edit'
        }
    }
})

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs
    },
    Edit: {
        screen: EditModal
    }
},{
    mode: 'modal',
    headerMode: 'none'
})

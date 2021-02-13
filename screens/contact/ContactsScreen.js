import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './Favorites';
import Recents from './Recents';
import Contacts from './Contacts';
import Keypad from './Keypad';
import Voicemail from './Voicemail';

const Tab = createBottomTabNavigator();

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Contacts"
        tabBarOptions={{
          activeTintColor: '#0A84FF',
          style: { backgroundColor: '#161616' },
        }}
      >
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ focused, color, size }) => (
              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  color: color,
                  fontSize: size,
                }}
              >
                􀋃
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Recents"
          component={Recents}
          options={{
            tabBarLabel: 'Recents',
            tabBarIcon: ({ focused, color, size }) => (
              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  color: color,
                  fontSize: size,
                }}
              >
                􀐬
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ focused, color, size }) => (
              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  color: color,
                  fontSize: size,
                }}
              >
                􀉭
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Keypad"
          component={Keypad}
          options={{
            tabBarLabel: 'Keypad',
            tabBarIcon: ({ focused, color, size }) => (
              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  color: color,
                  fontSize: size,
                }}
              >
                􀇹
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Voicemail"
          component={Voicemail}
          options={{
            tabBarLabel: 'Voicemail',
            tabBarIcon: ({ focused, color, size }) => (
              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  color: color,
                  fontSize: size,
                }}
              >
                􀕼
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default ContactsScreen;

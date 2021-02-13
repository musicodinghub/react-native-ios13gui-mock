import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Swiper from 'react-native-swiper';
import LockScreen from './screens/lock/LockScreen';
import LockScreenPasscode from './screens/lock/LockScreenPasscode';
import LockScreenNotification from './screens/lock/LockScreenNotification';
import HomeScreen from './screens/home/Home';
import ContactsScreen from './screens/contact/ContactsScreen';
import SettingsScreen from './screens/settings/Settings';
import SoundsScreen from './screens/settings/Sounds';

const customFonts = {
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  'SFProText-Medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
};

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
    };
  }

  async _loadAssetsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ assetsLoaded: true });
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (this.state.assetsLoaded) {
      return (
        // <Swiper
        //   activeDot={
        //     <View
        //       style={{
        //         width: 7,
        //         height: 7,
        //         borderRadius: 7,
        //         backgroundColor: '#fff',
        //         marginLeft: 7,
        //         marginRight: 7,
        //       }}
        //     ></View>
        //   }
        // >
        //   <LockScreen />
        //   <LockScreenPasscode />
        //   <LockScreenNotification />
        // </Swiper>

        // <HomeScreen />

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#161616',
              },
              headerTintColor: '#0A84FF',
              headerTitleStyle: {
                fontFamily: 'SFProText-Semibold',
                fontSize: 17,
                color: '#FFFFFF',
                letterSpacing: -0.41,
                textAlign: 'center',
                lineHeight: 22,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Contacts"
              component={ContactsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sounds"
              component={SoundsScreen}
              options={{
                headerTitle: 'Sounds & Haptics',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

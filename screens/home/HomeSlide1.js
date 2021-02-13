import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import moment from 'moment';

import Application from '../../components/Application';

const { width, height } = Dimensions.get('window');

let apps = [
  {
    name: 'Message',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Messages.png'),
    number: 1,
  },
  {
    name: 'Calendar',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Calendar.png'),
    number: 2,
  },
  {
    name: 'Photos',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Photos.png'),
    number: 3,
  },
  {
    name: 'Camera',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Camera.png'),
  },
  {
    name: 'Maps',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Maps.png'),
    number: 8,
  },
  {
    name: 'Clock',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Clock.png'),
  },
  {
    name: 'Weather',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Weather.png'),
  },
  {
    name: 'Stocks',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Stocks.png'),
  },
  {
    name: 'Wallet',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Wallet.png'),
  },
  {
    name: 'Notes',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Notes.png'),
  },
  {
    name: 'Calculator',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Calculator.png'),
  },
  {
    name: 'News',
    icon: require('../../assets/images/dark/Graphics/AppIcons/News.png'),
    number: 6,
  },
  {
    name: 'iTunes Store',
    icon: require('../../assets/images/dark/Graphics/AppIcons/iTunes.png'),
  },
  {
    name: 'App Store',
    icon: require('../../assets/images/dark/Graphics/AppIcons/AppStore.png'),
    number: 3,
  },
  {
    name: 'iBooks',
    icon: require('../../assets/images/dark/Graphics/AppIcons/iBooks.png'),
    number: 9,
  },
  {
    name: 'TV',
    icon: require('../../assets/images/dark/Graphics/AppIcons/TV.png'),
  },
  {
    name: 'Home',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Home.png'),
  },
  {
    name: 'Health',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Health.png'),
  },
  {
    name: 'Settings',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Settings.png'),
    number: 3,
    path: 'Settings',
  },
];

export default class HomeSlide1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteMode: false,
      animatedValue: new Animated.Value(0),
      stop: true,
    };
    this.rotateAnimated = Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 700,
      easing: Easing.in,
    });
  }

  _setDeleteMode = (mode) => {
    this.setState({ deleteMode: mode });
    this.setState({ stop: !this.state.stop });
  };

  _startAnimated = () => {
    this.state.animatedValue.setValue(0);
    this.rotateAnimated.start(() => {
      if (this.state.stop === false) {
        this._startAnimated();
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <View style={styles.apps}>
          {apps.map((app, i) => {
            return (
              <Application
                app={app}
                key={i}
                deleteMode={this.state.deleteMode}
                _setDeleteMode={this._setDeleteMode.bind(this)}
                animatedValue={this.state.animatedValue.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [
                    '0deg',
                    '3deg',
                    '3deg',
                    '0deg',
                    '-3deg',
                    '0deg',
                  ],
                })}
                _startAnimated={this._startAnimated.bind(this)}
                navigation={this.props.navigation}
              />
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apps: {
    width: 329,
    height: 485,
    marginTop: 28,
    marginLeft: 22,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#FFF',
  },
  app: {
    width: 74,
    height: 80,
    // marginLeft: 6,
    marginRight: 8,
    marginBottom: 23,
    // backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appIcon: {
    width: 60,
    height: 60,
  },
  appText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    letterSpacing: 0,
  },
  dock: {
    marginLeft: 10,
    position: 'absolute',
    bottom: 10,
    width: 355,
    height: 94,
    borderRadius: 31,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

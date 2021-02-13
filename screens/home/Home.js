import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';

import Application from '../../components/Application';
import HomeSlide1 from './HomeSlide1';
import HomeSlide2 from './HomeSlide2';
import HomeSlide3 from './HomeSlide3';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Image
          source={require('../../assets/images/dark/Background.png')}
          style={{
            position: 'absolute',
            top: 0,
          }}
        />
        <Swiper
          paginationStyle={{ position: 'absolute', bottom: 80 }}
          activeDot={
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 7,
                backgroundColor: '#FFFFFF',
                marginRight: 7,
                marginLeft: 7,
              }}
            ></View>
          }
        >
          <HomeSlide1 navigation={this.props.navigation} />
          <HomeSlide2 />
          <HomeSlide3 />
        </Swiper>
        <View style={styles.dock}>
          <Image
            source={require('../../assets/images/dark/Graphics/AppIcons/Phone.png')}
          />
          <Image
            source={require('../../assets/images/dark/Graphics/AppIcons/Safari.png')}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push('Contacts');
            }}
          >
            <Image
              source={require('../../assets/images/dark/Graphics/AppIcons/Contacts.png')}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/dark/Graphics/AppIcons/Music.png')}
          />
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

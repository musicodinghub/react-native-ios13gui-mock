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
  ScrollView
} from 'react-native';
import moment from 'moment';

import Notification from '../../components/Notification';

const { width, height } = Dimensions.get('window');

class LockScreenNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  notifications = [
    {
      icon: require('../../assets/images/dark/Screen_Time_Icon.png'),
      header: 'SCREEN TIME',
      time: 'Yesterday, 09:01',
      title: 'Weekly Report',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: require('../../assets/images/dark/Google_Map_Icon.png'),
      header: 'GOOGLE MAPS',
      time: 'Tueday, 11:01',
      title: 'Google Map Update',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: require('../../assets/images/dark/Screen_Time_Icon.png'),
      header: 'SCREEN TIME',
      time: 'Yesterday, 09:01',
      title: 'Weekly Report',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Image
          source={require('../../assets/images/dark/Background.png')}
          style={{
            position: 'absolute',
            top: 0
          }}
        />
        <ScrollView>
          <View style={styles.datetime}>
            <Image
              source={require('../../assets/images/dark/Locked_Icon.png')}
            />
            <Text style={styles.time}>{moment().format('HH:mm')}</Text>
            <Text style={styles.date}>{moment().format('dddd, DD, MMMM')}</Text>
          </View>
          <View style={styles.notifications}>
            <View style={styles.notificationCentreContainer}>
              <Text style={styles.notificationCentre}>Notification Centre</Text>
              <Image
                source={require('../../assets/images/dark/Close_Icon.png')}
              />
            </View>
            {this.notifications.map((item, i) => {
              return <Notification item={item} key={i} />;
            })}
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/dark/Flash_Light.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/dark/Camera.png')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LockScreenNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  datetime: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    fontFamily: 'SFProDisplay-Thin',
    fontSize: 80,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  date: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.32
  },
  buttons: {
    marginTop: 80,
    flexDirection: 'row',
    marginLeft: 46,
    marginRight: 46,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  swipe: {
    position: 'absolute',
    bottom: 50,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  swipeText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: -0.41,
    textAlign: 'center',
    lineHeight: 22
  },
  notifications: {
    marginTop: 32
  },
  notificationCentreContainer: {
    marginLeft: 18,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  notificationCentre: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: 0.35
  }
});

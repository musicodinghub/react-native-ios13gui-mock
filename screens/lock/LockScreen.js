import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

class LockScreen extends Component {
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
            top: 0
          }}
        />
        <View style={styles.datetime}>
          <Image source={require('../../assets/images/dark/Locked_Icon.png')} />
          <Text style={styles.time}>{moment().format('HH:mm')}</Text>
          <Text style={styles.date}>{moment().format('dddd, DD, MMMM')}</Text>
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
        <View style={styles.swipe}>
          <Text style={styles.swipeText}>Swipe up to open</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default LockScreen;

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
    marginTop: 480,
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
  }
});

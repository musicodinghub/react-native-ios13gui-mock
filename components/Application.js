import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let app = this.props.app;
    let rotateZ = this.props.animatedValue ? this.props.animatedValue : '0deg';
    let numberStyle = app.number === undefined ? styles.displayNone : '';

    return (
      <TouchableOpacity
        onPress={() => {
          // Alert.alert('Open the ' + app.name + ' app');
          if (app.path) {
            this.props.navigation.push(app.path);
          }
        }}
        onLongPress={() => {
          this.props._setDeleteMode(!this.props.deleteMode);
          this.props._startAnimated();
        }}
      >
        <Animated.View
          style={[styles.app, { transform: [{ rotateZ: rotateZ }] }]}
        >
          <View
            style={{
              width: 74,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              top: -10,
            }}
          >
            <View style={{ position: 'relative', left: 0 }}>
              <Image
                source={require('../assets/images/dark/Close_Icon.png')}
                style={[
                  styles.closeIcon,
                  this.props.deleteMode ? null : styles.displayNone,
                ]}
              />
            </View>
            <View style={{ position: 'relative', right: 0 }}>
              <View style={[styles.number, numberStyle]}>
                <Text style={styles.numberText}>{app.number}</Text>
              </View>
            </View>
          </View>
          <Image source={app.icon} style={styles.appIcon} />
          <Text style={styles.appText}>{app.name}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
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
    zIndex: -1,
  },
  appText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    letterSpacing: 0,
  },
  closeIcon: {
    width: 20,
    height: 20,
    // display: 'none',
  },
  number: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FF375f',
    alignItems: 'center',
    justifyContent: 'center',
    // display: 'none',
  },
  numberText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0,
    textAlign: 'center',
  },
  displayNone: {
    display: 'none',
  },
});

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let item = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image source={item.icon} style={styles.headerIcon} />
            <Text style={styles.headerText}>{item.header}</Text>
          </View>
          <Text style={styles.headerTime}>{item.time}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    margin: 4,
    borderRadius: 13,
    backgroundColor: 'rgba(37,37,37,0.5)'
  },
  header: {
    marginLeft: 10,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  headerText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: '#FF375F',
    letterSpacing: -0.08,
    lineHeight: 18
  },
  headerTime: {
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: '#FF375F',
    letterSpacing: -0.08,
    lineHeight: 18,
    textAlign: 'center'
  },
  title: {
    marginLeft: 10
  },
  titleText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: -0.08,
    lineHeight: 20
  },
  message: {
    marginLeft: 10
  },
  messageText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: -0.08,
    lineHeight: 20
  }
});

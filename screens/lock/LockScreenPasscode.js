import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class LockScreenPasscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ['', '', '', ''],
    };
  }

  _onPressNumber = (num) => {
    let tempCode = this.state.passcode;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode });
    if (this.state.passcode.toString() === '1,2,3,4') {
    }
  };

  _onPressCancel = () => {
    let tempCode = this.state.passcode;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode });
  };

  render() {
    let numbers = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 0 },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../assets/images/dark/Background.png')}
          style={{ position: 'absolute', top: 0, width: width, height: height }}
          blurRadius={40}
        />
        <View style={styles.swipe}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/dark/Locked_Icon.png')}
              style={{ width: 13.9, height: 20, marginRight: 8 }}
            />
            <Text style={styles.swipeUPText}>Swipe up to unlock</Text>
          </View>
          <View style={{ marginTop: 75 }}>
            <View>
              <Text style={styles.passcodeText}> Enter Passcode</Text>
            </View>
            <View style={styles.codeContainer}>
              {this.state.passcode.map((p) => {
                let style = p != '' ? styles.code2 : styles.code1;
                return <View style={style}></View>;
              })}
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.numbersContainer}>
            {numbers.map((num) => {
              return (
                <TouchableOpacity
                  style={styles.number}
                  key={num.id}
                  onPress={() => this._onPressNumber(num.id)}
                >
                  <Text style={styles.numberText}>{num.id}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Emergency</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressCancel()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default LockScreenPasscode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipe: {
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeUPText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  passcodeText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 22,
    color: '#FFFFFF',
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  code1: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  code2: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 58,
    width: 282,
    height: 348,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 36,
    color: '#FFFFFF',
    letterSpacing: 0,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 73,
    marginLeft: 46,
    marginRight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 16,
    color: '#FFFFFF',
    letterSpacing: -0.39,
    textAlign: 'center',
  },
});

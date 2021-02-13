import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Switch } from 'react-native-switch';
import ToggleSwitch from 'toggle-switch-react-native';
import Constants from 'expo-constants';
import { DATA } from './Data';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }
  render() {
    let item = this.props.item;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.push('Sounds');
        }}
      >
        <View style={styles.itemView}>
          <View style={styles.itemTextView}>
            <View
              style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
            >
              <Image source={item.icon} style={{ marginRight: 18 }} />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {item.type === 'switch' ? (
                <ToggleSwitch
                  isOn={this.state.isOn}
                  onColor="#32D74B"
                  offColor="#3A3A3C"
                  size="medium"
                  onToggle={(isOn) => {
                    this.setState({ isOn: isOn });
                  }}
                />
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.itemValue}>{item.value}</Text>
                  <Image
                    source={require('../../assets/images/dark/Right.png')}
                    style={{ marginLeft: 9 }}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#161616" />

        <View style={{ height: 130, backgroundColor: '#161616' }}>
          <View style={styles.headerContactsView}>
            <Text style={styles.headerContacts}>Settings</Text>
          </View>
          <View style={styles.searchBox}>
            <Image
              source={require('../../assets/images/dark/Search.png')}
              style={{ marginLeft: 7, marginRight: 7 }}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#8E8E93"
              style={styles.inputText}
              returnKeyType="search"
              keyboardAppearance="dark"
              onChangeText={(text) => {}}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: '#1C1C1E',
            flexDirection: 'row',
          }}
        >
          <Image
            source={require('../../assets/images/dark/Userpic.png')}
            style={styles.avatar}
          />
          <View
            style={{
              marginLeft: 15,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.accountText}>Luther Wilson</Text>
            <Text style={styles.introText}>
              Apple ID, iCloud, iTunes & App Store
            </Text>
          </View>
        </View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={({ item }) => (
            <View>
              <Text style={{ color: 'white' }}>asdfasdfsd</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Item item={item} navigation={this.props.navigation} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  headerView: {
    height: 44,
    marginTop: 44,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupsText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: '#0A84FF',
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  headerContactsView: {
    height: 41,
    marginTop: 25,
    marginLeft: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerContacts: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 34,
    color: '#FFFFFF',
    letterSpacing: -0.41,
    lineHeight: 41,
  },
  searchBox: {
    marginTop: 12,
    height: 37,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: '#2C2C2E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: '#8E8E93',
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  avatar: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
  },
  accountText: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: 0.38,
  },
  introText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: '#FFFFFF',
    letterSpacing: 0.38,
    lineHeight: 18,
  },
  sectionHeader: {
    height: 30,
    backgroundColor: '#000000',
  },
  itemView: {
    height: 44,
    backgroundColor: '#1C1C1E',
  },
  itemTextView: {
    height: 44,
    marginLeft: 16,
    flexDirection: 'row',
    borderBottomColor: '#38383A',
    borderBottomWidth: 0.5,
  },
  itemName: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  itemValue: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: 'rgba(235,235,245,0.60)',
    letterSpacing: -0.41,
    lineHeight: 22,
  },
});

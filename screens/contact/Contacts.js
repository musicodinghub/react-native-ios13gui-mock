import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';

class Contacts extends Component {
  constructor(props) {
    super(props);
    let nameData = [
      {
        name: 'Anderson',
        firstname: 'Bill',
        lastname: 'Anderson',
      },
      {
        name: 'Aaron',
        firstname: 'Milton',
        lastname: 'Aaron',
      },
      {
        name: 'Alex',
        firstname: 'Michale',
        lastname: 'Alex',
      },
      {
        name: 'Baarda',
        firstname: 'Will',
        lastname: 'Baarda',
      },
      {
        name: 'Ballard',
        firstname: 'Bruce',
        lastname: 'Ballard',
      },
      {
        name: 'Barlow',
        firstname: 'Michael',
        lastname: 'Barlow',
      },
      {
        name: 'Haro',
        firstname: 'Anna',
        lastname: 'Haro',
      },
      {
        name: 'Calvin',
        firstname: 'David',
        lastname: 'Calvin',
      },
      {
        name: 'David',
        firstname: 'Carl',
        lastname: 'David',
      },
      {
        name: 'Elaine',
        firstname: 'Mary',
        lastname: 'Elaine',
      },
      {
        name: 'Felix',
        firstname: 'David',
        lastname: 'Felix',
      },
      { name: '**&&&&', firstname: '**', lastname: '&&&&' },
      { name: '1122', firstname: '11', lastname: '22' },
    ];
    this.state = {
      dataArray: nameData,
    };
  }

  _renderHeader = (params) => {
    return (
      <View style={styles.sectionView}>
        <Text style={styles.sectionText}>{params.key}</Text>
      </View>
    );
  };

  _renderItem = (item, index, section) => {
    return (
      <View style={styles.itemView}>
        <View style={styles.itemTextView}>
          <Text style={styles.itemFirstName}>{item.firstname}</Text>
          <Text style={styles.itemLastName}>{item.lastname}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 200, backgroundColor: '#161616' }}>
          <View style={styles.headerView}>
            <Text style={styles.groupsText}>Groups</Text>
            <Image
              source={require('../../assets/images/dark/Add_Action.png')}
            />
          </View>
          <View style={styles.headerContactsView}>
            <Text style={styles.headerContacts}>Contacts</Text>
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
            backgroundColor: '#000000',
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
            <Text style={styles.introText}>My Card</Text>
          </View>
        </View>
        <View style={styles.container}>
          <SectionListContacts
            ref={(s) => (this.sectionList = s)}
            sectionListData={this.state.dataArray}
            initialNumToRender={this.state.dataArray.length}
            otherAlphabet="#"
            renderHeader={this._renderHeader}
            renderItem={this._renderItem}
            letterViewStyle={styles.letterView}
            letterTextStyle={styles.letterText}
          />
        </View>
      </View>
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    marginTop: 12,
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
  sectionView: {
    height: 28,
    backgroundColor: '#2C2C2E',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sectionText: {
    marginLeft: 16,
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 17,
    color: '#FFFFFF',
  },
  itemView: {
    height: 44,
    backgroundColor: 'rgba(22,22,22,0.75)',
  },
  itemTextView: {
    height: 44,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemFirstName: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    color: '#FFFFFF',
  },
  itemLastName: {
    marginLeft: 5,
    fontFamily: 'SFProText-Semibold',
    fontSize: 17,
    color: '#FFFFFF',
  },
  letterText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 11,
    color: '#007AFF',
  },
});

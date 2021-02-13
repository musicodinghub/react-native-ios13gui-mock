import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Keypad = ({ params }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Keypad Screen</Text>
  </View>
);

export default Keypad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Voicemail = ({ params }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Voicemail Screen</Text>
  </View>
);

export default Voicemail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});

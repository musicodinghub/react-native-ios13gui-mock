import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Favorites = ({ params }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Favorites Screen</Text>
  </View>
);

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});

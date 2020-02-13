import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text>Icon</Text>
        <Text>Logo</Text>
        <Text>Icon</Text>
      </View>
      <View style = {styles.profileCard}>
        <Text>Lorem ipsum blah blah blah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    tintColor: '#C5C5C5'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: '5%',
    textAlign: 'center',
    justifyContent: 'space-around'
  },
  profileCard: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderBottomEndRadius: 2,
  }

});

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Icon 1</Text>
          <Image>Images.tinder-logo</Image>
          <Text>Icon 2</Text>
        </View>
        <View style = {styles.container}>
          Lorem ipsum blah blah blah
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  icons: {
    tintColor: '#C5C5C5'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: '5%',
    textAlign: 'center',
    justifyContent: 'space-between'
  },
  profileCard: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    height: '85%',
    width: '95%',
    borderBottomEndRadius: 2,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

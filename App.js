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
          <Image style={styles.logo} resizeMode='contain' source={Images.logo} />
          <Image style={styles.chat} source={Images.chat} />
        </View>
        <View style = {styles.container}>
          <Text>Esto es un text</Text>
        </View>
        {/* This is for the lower icon bar*/}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
    justifyContent: 'flex-end',
    padding: '5%',
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
    justifyContent: 'space-around',
  },
  logo: {
    width: '25%',
    height: '20%',
  },
  chat: {
    top: '4%', 
    height: '10%', 
    width: '10%', 
    paddingTop: '10%',
  }
});

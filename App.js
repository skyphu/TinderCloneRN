import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
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
      <View style={styles.header}>
        <Text>Icon 1</Text>
        <Image source={Images.logo} resizeMode="contain" style = {styles.logo} />
        <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
      </View>
      <View style={styles.container}>
        <View style = {styles.profileCard}>
          <Text>Esto es un text</Text>
        </View>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
    justifyContent: 'center'
  },
  icons: {
    tintColor: '#C5C5C5',
    width: Platform.OS === 'ios' ? '10%' : '10%',
    height: Platform.OS === 'ios' ? '100%' : '10%'
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ?  44: 56,
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
    margin: 10
  },
  profileCard: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    height: '75%',
    width: '90%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    width: Platform.OS === 'ios' ? '20%' : '25%',
    height: Platform. OS === 'ios' ? '60%' : '20%',
  }
});

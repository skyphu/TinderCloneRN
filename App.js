import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
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
          <Image style={styles.icons} resizeMode="contain" source={Images.gear} /> 
          <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
          <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
       
        </View>
        <View style = {styles.profileCard}>
          <Image style={styles.profileImg} resizeMode="cover" source={this.state.profileImage}/>
        </View>
        <View style = {styles.buttonRow}>
       {/* This is for the lower buttons */}
        <View >
          <Image style={{height: '5%', width: '5%'}} source={Images.like} />
        </View>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    tintColor: '#C5C5C5',
    width: Platform.OS === 'ios' ? '10%' : '10%',
    height: Platform.OS === 'ios' ? '100%' : '90%',
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ?  44: '5%',
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
    margin: Platform.OS === 'ios' ? 15 : '15%',
    width: '100%',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : '5%',
  },
  profileCard: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    height: Platform.OS === 'ios' ? '75%' : '60%',
    width: '90%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    margin: Platform.OS === 'ios' ? '5%' : '20%',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    width: Platform.OS === 'ios' ? '20%' : '20%',
    height: Platform. OS === 'ios' ? '60%' : '50%',
    top: '10%',
  },
  gear: {
    top: '10%', 
    height: '25%', 
    width: '25%', 
    margin: '10%',
  },
  profileImg: {
    height: Platform.OS === 'ios' ? '90%' : '120%',
    width: '100%',
  }
});

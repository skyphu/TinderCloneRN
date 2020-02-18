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
          <View style={styles.cardText}>
            <Text style={styles.name}>{this.state.name}, {this.state.age}</Text>
            <Text style={styles.occupation}>{this.state.occupation}</Text>
          </View>
        </View>
        <View style = {styles.buttonRow}>
        {/* This is for the lower icon bar*/}
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
    top: Platform.OS === 'ios' ? '0%' : '5%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ?  44: '5%',
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
    margin: 5,
    width: '100%',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
    padding: '0'
  },
  profileCard: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    height: '60%',
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
    width: Platform.OS === 'ios' ? '20%' : '60%',
    height: Platform. OS === 'ios' ? '60%' : '60%',
    top: '5%'
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

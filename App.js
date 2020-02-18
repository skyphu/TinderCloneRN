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
          {/* <TouchableHighlight onPress={ () => alert('gear touched')}> */}
            <Image style={styles.icons} resizeMode="contain" source={Images.gear} />
          {/* </TouchableHighlight> */}
          <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
          {/* <TouchableHighlight> */}
            <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
          {/* </TouchableHighlight> */}
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
    alignItems: 'center'
  },
  icons: {
    tintColor: '#C5C5C5',
    width: '10%',
    height: '90%'
  },
  highlight: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ?  44: 56,
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
    margin: 5,
    width: '100%',
    paddingHorizontal: '3%'
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
    margin: '20%',
    backgroundColor: '#FFF'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    width: '25%',
    height: '60%',
  },
  gear: {
    top: '4%', 
    height: '10%', 
    width: '10%', 
    margin: '10%',
  },
  profileImg: {
    height: '110%',
    width: '100%'
  },
  cardText: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: '2%'
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  occupation: {
    fontSize: 16,
    color: '#C5C5C5'
  }
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { styles } from './styles.js'

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



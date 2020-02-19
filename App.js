import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { styles } from './styles.js'

const cards = [{
  harold: Profiles.harold,
  barbara: Profiles.barbara,
  james: Profiles.james,
  john: Profiles.john,
  linda: Profiles.linda,
  liz: Profiles.liz,
  mary: Profiles.mary,
  michael: Profiles.michael,
  patricia: Profiles.patricia,
  robert: Profiles.robert
}];

export default class App extends React.Component {
  constructor() {
    super();

    let harold = Profiles.harold;
    this.state = {
      profiles: {
          profileImg: harold.image,
          name: harold.name,
          age: harold.age,
          occupation: harold.occupation
      }
      
    }
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
          <Image style={styles.profileImg} resizeMode="cover" source={this.state.profileImg}/>
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



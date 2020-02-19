import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
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
          <TouchableOpacity onPress={ () => console.log('SUPER LIKE')}>
            <View >
              <Image style={{width: 55, height: 55, resizeMode: 'contain'}} source={Images.superLike} />
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => console.log('LIKE')} >
            <View >
              <Image style={{width: 55, height: 55, resizeMode: 'contain'}} source={Images.like} />
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={ () => console.log('BOOST')}>
            <View >
              <Image style={{width: 55, height: 55, resizeMode: 'contain'}} source={Images.boost} />
            </View>
          </TouchableOpacity>
         <TouchableOpacity onPress= { () => console.log('NOPE')}>
            <View>
              <Image style={{width: 50, height: 55, resizeMode: 'contain'}} source={Images.nope} />
            </View>
         </TouchableOpacity>
          <TouchableOpacity onPress= { () => console.log('REWIND')}>
            <View>
              <Image style={{width:55, height:55, resizeMode: 'contain' }} source={Images.rewind} />
            </View>
          </TouchableOpacity>
         
          
          
        </View>
      </View>
      
    );
  }
}


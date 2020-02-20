import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { styles } from './styles.js';
import SwipeCards from './SwipeCards';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {name: Profiles.harold.name, age: Profiles.harold.age, occupation: Profiles.harold.occupation, image: Profiles.harold.image},
        {name: Profiles.barbara.name, age: Profiles.barbara.age, occupation: Profiles.barbara.occupation, image: Profiles.barbara.image},
        {name: Profiles.james.name, age: Profiles.james.age, occupation: Profiles.james.occupation, image: Profiles.james.image},
        {name: Profiles.john.name, age: Profiles.john.age, occupation: Profiles.john.occupation, image: Profiles.john.image},
        {name: Profiles.linda.name, age: Profiles.linda.age, occupation: Profiles.linda.occupation, image: Profiles.linda.image},
        {name: Profiles.liz.name, age: Profiles.liz.age, occupation: Profiles.liz.occupation, image: Profiles.liz.image},
        {name: Profiles.mary.name, age: Profiles.mary.age, occupation: Profiles.mary.occupation, image: Profiles.mary.image},
        {name: Profiles.michael.name, age: Profiles.michael.age, occupation: Profiles.michael.occupation, image: Profiles.mary.image},
        {name: Profiles.patricia.name, age: Profiles.patricia.age, occupation: Profiles.patricia.occupation, image: Profiles.patricia.image},

      ]
      }
    };

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.icons} resizeMode="contain" source={Images.gear} />
          <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
          <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
        </View>
        <SwipeCards
          cards = {this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
        />  
        <View style = {styles.buttonRow}>
        {/* This is for the lower icon bar*/}
          <TouchableOpacity onPress={ () => console.log('SUPER LIKE')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.superLike} />
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => console.log('LIKE')} >
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.like} />
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={ () => console.log('BOOST')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.boost} />
            </View>
          </TouchableOpacity>
         <TouchableOpacity onPress= { () => console.log('NOPE')}>
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.nope} />
            </View>
         </TouchableOpacity>
          <TouchableOpacity onPress= { () => console.log('REWIND')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.rewind} />
            </View>
          </TouchableOpacity>              
          
        </View>
      </View>
      
    );
  }
}


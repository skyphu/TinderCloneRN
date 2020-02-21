import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { styles } from './styles.js';
import SwipeCards from './SwipeCards';


export default class App extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.icons} resizeMode="contain" source={Images.gear} />
          <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
          <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
        </View>
        <View style={{height: 550, width: 300}}>
          <SwipeCards/>  
        </View>
        <View style = {styles.buttonRow}>
        {/* This is for the lower icon bar*/}
          <TouchableOpacity onPress={ () => alert('SUPER LIKE')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.superLike} />
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => alert('LIKE')} >
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.like} />
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={ () => alert('BOOST')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.boost} />
            </View>
          </TouchableOpacity>
         <TouchableOpacity onPress= { () => alert('NOPE')}>
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.nope} />
            </View>
         </TouchableOpacity>
          <TouchableOpacity onPress= { () => alert('REWIND')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.rewind} />
            </View>
          </TouchableOpacity>              
          
        </View>
      </View>
      
    );
  }
}


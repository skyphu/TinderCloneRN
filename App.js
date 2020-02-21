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
        {/* HEADER SECTION */}
        <View style={styles.header}>
            <TouchableOpacity onclick = {() => alert("settings clicked!")}>
              <View>
                <Image style={styles.icons} resizeMode="contain" source={Images.gear} />
              </View>
            </TouchableOpacity>
          <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
          <Image style={styles.icons} resizeMode="contain" source={Images.chat} />
        </View>
        {/* SWIPE CARDS SECTION */}
        <View style={{height: '85%', width: '90%'}}>
          <SwipeCards/>  
        </View>
        <View style = {styles.buttonRow}>
        {/* LOWER ICON BAR -- Buttons are in reverse order,
          * so reverse-row must be used to fix
          */}
          {/* SUPER LIKE BUTTON */}
          <TouchableOpacity onPress={ () => alert('SUPER LIKE')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.superLike} />
            </View>
          </TouchableOpacity>  
          {/* LIKE BUTTON */}
          <TouchableOpacity onPress={() => alert('LIKE')} >
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.like} />
            </View>
          </TouchableOpacity>
          {/* BOOST BUTTON */}
          <TouchableOpacity onPress={ () => alert('BOOST')}>
            <View style={styles.smallButton}>
              <Image style={styles.buttonIcon} source={Images.boost} />
            </View>
          </TouchableOpacity>
          {/* NOPE BUTTON */}
         <TouchableOpacity onPress= { () => alert('NOPE')}>
            <View style={styles.biggerButton}>
              <Image style={styles.buttonIcon} source={Images.nope} />
            </View>
         </TouchableOpacity>
         {/* REWIND BUTTON */}
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


// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
 
import SwipeCards from 'react-native-swipe-cards';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View styles={ styles.profileCard }>
                <Image style= {styles.thumbnail} source={{uri: this.props.profileImage}}/>
                <Text>{this.props.text}</Text>
            </View>

        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <View>
          <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
      )
    }
  }

  export default class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          cards: cards,
          outOfCards: false
      };
    }
  }
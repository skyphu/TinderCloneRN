// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { styles } from './styles.js';
import SwipeCards from 'react-native-swipe-cards';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.SwipeCards/*{width: 370, height: 400}*/}>
          <Image style={styles.profileImg} resizeMode='cover' source={this.props.image}/>
          <View style={styles.cardText}>
              <Text style={styles.name}>{this.props.name}, {this.props.age}</Text>
              <Text style={styles.occupation}>{this.props.occupation}</Text>
          </View>
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
      <View style = {styles.profileCard}>
          <View style={styles.cardText}>
            <Text style={styles.noMoreCards}>No more cards</Text>
          </View>
      </View>
    )
  }
}
 
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
 
  handleYup (card) {
    console.log(`Yup for ${card.name}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.props.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
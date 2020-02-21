// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { styles } from './styles.js';
import SwipeCards from 'react-native-swipe-cards';
import { Images, Profiles } from './App/Themes';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.profileCard}>
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
      <View style={styles.profileCard}>
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
    this.state = {
      cards: [
        {name: Profiles.harold.name, age: Profiles.harold.age, occupation: Profiles.harold.occupation, image: Profiles.harold.image},
        {name: Profiles.barbara.name, age: Profiles.barbara.age, occupation: Profiles.barbara.occupation, image: Profiles.barbara.image},
        {name: Profiles.james.name, age: Profiles.james.age, occupation: Profiles.james.occupation, image: Profiles.james.image},
        {name: Profiles.john.name, age: Profiles.john.age, occupation: Profiles.john.occupation, image: Profiles.john.image},
        {name: Profiles.linda.name, age: Profiles.linda.age, occupation: Profiles.linda.occupation, image: Profiles.linda.image},
        {name: Profiles.liz.name, age: Profiles.liz.age, occupation: Profiles.liz.occupation, image: Profiles.liz.image},
        {name: Profiles.mary.name, age: Profiles.mary.age, occupation: Profiles.mary.occupation, image: Profiles.mary.image},
        {name: Profiles.michael.name, age: Profiles.michael.age, occupation: Profiles.michael.occupation, image: Profiles.michael.image},
        {name: Profiles.patricia.name, age: Profiles.patricia.age, occupation: Profiles.patricia.occupation, image: Profiles.patricia.image},
      ]
      }
    };
 
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
        cards={this.state.cards}
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
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
<<<<<<< HEAD
          <Image style={styles.icons} resizeMode="contain" source={Images.gear} /> 
=======
          {/* <TouchableHighlight onPress={ () => alert('gear touched')}> */}
            <Image style={styles.icons} resizeMode="contain" source={Images.gear} />
          {/* </TouchableHighlight> */}
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
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
<<<<<<< HEAD
       {/* This is for the lower buttons */}
        <View >
          <Image style={{height: '5%', width: '5%'}} source={Images.like} />
        </View>

=======
        {/* This is for the lower icon bar*/}
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
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
    alignItems: 'center',
  },
  icons: {
    tintColor: '#C5C5C5',
<<<<<<< HEAD
    width: Platform.OS === 'ios' ? '10%' : '10%',
    height: Platform.OS === 'ios' ? '100%' : '90%',
    
=======
    width: '10%',
    height: '90%'
  },
  highlight: {
    width: '100%',
    height: '100%',
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ?  44: '5%',
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
<<<<<<< HEAD
    margin: Platform.OS === 'ios' ? 15 : '15%',
    width: '100%',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : '5%',
=======
    margin: 5,
    width: '100%',
    paddingHorizontal: '3%'
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
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
<<<<<<< HEAD
    margin: Platform.OS === 'ios' ? '5%' : '20%',
=======
    margin: '20%',
    backgroundColor: '#FFF'
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
<<<<<<< HEAD
    width: Platform.OS === 'ios' ? '20%' : '20%',
    height: Platform. OS === 'ios' ? '60%' : '50%',
    top: '10%',
=======
    width: '25%',
    height: '60%',
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
  },
  gear: {
    top: '10%', 
    height: '25%', 
    width: '25%', 
    margin: '10%',
  },
  profileImg: {
<<<<<<< HEAD
    height: Platform.OS === 'ios' ? '90%' : '120%',
    width: '100%',
=======
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
>>>>>>> 1d33c2b2621d8016cc7e55e29c0776966f03c93f
  }
});

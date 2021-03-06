import { StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    //============Parent view style==============
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F0F0F0',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    //============Header styles==============
    icons: {
      tintColor: '#C5C5C5',
      width: '25%',
      height: Platform.isPad ? '75%' : '75%',
    },
    logo: {
      width: Platform.isPad ? '20%' : '30%',
      height: '60%',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#C5C5C5',
      // marginTop: Platform.isPad ? 15 : 5,
      width: '100%',
      top: Platform.isPad ? 0: 5,
    },
    //============Tinder card styles==============
    profileCard: {
      flex: 6,
      borderColor: '#C5C5C5',
      borderWidth: 1,
      height: Platform.isPad ? '75%' : '80%',
      width: 325,
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      width: 350,
      height: 400,
      alignItems: 'center',
      flexDirection: 'column',
      margin: Platform.isPad ? '5%' : '15%',
      backgroundColor: '#FFF',
      bottom: '5%'  
    },
    profileImg: {
      height: '90%',
      width: '100%',
      justifyContent: 'center',
    },
    cardText: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      padding: Platform.isPad ? 10 : '2%',
      backgroundColor: '#FFF',
    },
    name: {
      // paddingTop: 10,
      fontSize: Platform.isPad ? 36: 24,
      fontWeight: "700",
    },
    occupation: {
      // paddingBottom: 10,
      fontSize: Platform.isPad ? 24 : 16,
      color: '#C5C5C5',
    },
    noMoreCards: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22,
    },
    //============Bottom button styles==============
    buttonRow: {
      flex: 1,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      borderColor: '#C5C5C5',
      width: '100%',
      height: '10%',
      paddingHorizontal: Platform.isPad ? 0 : '5%', // Must add percentage on Tablet
      bottom: '5%'
    },
    smallButton: {
      borderRadius: 50, 
      backgroundColor: 'white', 
      width: 50, //Read comment for Height and Width in BiggerButton[bellow this]
      height: 50, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    biggerButton:{
      borderRadius: 50, 
      backgroundColor: 'white', 
      width: 60, //When i chang it to % it dissapears. Check if it behave the same in IOS
      height: 60, //Same thing here as above. 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    buttonIcon:{
      width: '60%', 
      height: '60%', 
      resizeMode: 'contain',
    }
  });
  
import { StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F0F0F0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      tintColor: '#C5C5C5',
      width: '10%',
      height: Platform.isPad ? '100%' : '90%',
    },
    highlight: {
      width: '100%',
      height: '100%',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: Platform.isPad ?  44: 55,
      borderBottomWidth: 1,
      borderColor: '#C5C5C5',
      margin: Platform.isPad ? 15 : 5,
      width: '100%',
      paddingHorizontal: Platform.isPad ? 0 : 5,
      top: Platform.isPad ? 0: '10%',
    },
    profileCard: {
      borderColor: '#C5C5C5',
      borderWidth: 1,
      height: Platform.isPad ? '75%' : '60%',
      width: '90%',
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      alignItems: 'center',
      flexDirection: 'column',
      margin: Platform.isPad ? '5%' : '15%',
      backgroundColor: '#FFF',
    },
    buttonRow: {
      flex: 1,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      height: Platform.isPad ?  44: 56,
      
      borderColor: '#C5C5C5',
      margin: Platform.isPad ? 15 : 5, // En android esto no es necesario
      width: '100%',
      paddingHorizontal: Platform.isPad ? 0 : '5%', // Must add percentage on Tablet
      top: Platform.isPad ? 0: '1%',
                  
    },
    logo: {
      width: Platform.isPad ? '20%' : '25%',
      height: '60%',
    },
    gear: {
      top: '4%', 
      height: '10%', 
      width: '10%', 
      margin: '10%',
    },
    profileImg: {
      height: Platform.isPad ? '90%' : '110%',
      width: '100%',
    },
    cardText: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      padding: Platform.isPad ? 10 : '2%',
    },
    name: {
      fontSize: Platform.isPad ? 36: 24,
      fontWeight: "700",
    },
    occupation: {
      fontSize: Platform.isPad ? 24 : 16,
      color: '#C5C5C5',
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
  
import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../styles.js'

export default class Card extends React.Component {
    constructor(props){
        super(props);
        console.log(JSON.stringify(props));
    };

    render() {
        return(
            <View style = {styles.profileCard}>
                <Image style={styles.profileImg} resizeMode="cover" source={this.props.image}/>
                <View style={styles.cardText}>
                    <Text style={styles.name}>{this.props.name}, {this.props.age}</Text>
                    <Text style={styles.occupation}>{this.props.occupation}</Text>
                </View>
            </View>
        )
    }
}
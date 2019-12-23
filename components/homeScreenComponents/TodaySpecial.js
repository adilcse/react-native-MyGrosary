import React from 'react';
import {
 
 
  StyleSheet,
  Text,
 View,
 
} from 'react-native';


import Card from './Card';
import Colors from '../../constants/Colors';
const TodaySpecial=(props)=>{
return(
    <View style = {{alignItems : 'center',flexDirection :'column',height : 170}}>
    <Card style={styles.todaySpecial}>
     <Text>Todays Special</Text>
   </Card>
   </View>
)
}
const styles = StyleSheet.create({
    todaySpecial : {
        width: '90%',
        height : 150,
        backgroundColor : Colors.tintColor,
        shadowOpacity : 0.1,
        alignContent : 'center'
      }
   
  });
export default TodaySpecial;
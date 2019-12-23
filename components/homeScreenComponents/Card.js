import React from 'react';
import {StyleSheet,View} from 'react-native';
const Card =props=>{
return <View style={{...styles.card , ...props.style}}>{props.children}</View>
}
const styles=StyleSheet.create({
    card:{
      width : 300,
       maxWidth : '90%',
      alignItems : 'center',
      shadowColor : 'black',
       shadowOffset : {width : 2,height : 2},
      shadowRadius : 6,
      shadowOpacity : 0.25,
      backgroundColor :'white',
      elevation : 10,
      padding: 20,
      borderRadius : 10,
    }

});
export default Card;
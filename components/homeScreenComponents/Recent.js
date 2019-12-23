import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
  View
 
 
} from 'react-native';


import Card from './Card';

const Recent=(props)=>{
return(
    <View style={styles.container}>
    <Text style = {styles.containerText}> Recent</Text>
    <ScrollView  style={styles.cardContainer}   contentContainerStyle={styles.contentContainer}  >
    
    <Card style={styles.card}>
      <Text> Item 1</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Item 2</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Item 3</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Item 4</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Item 5</Text>
    </Card>
  
    </ScrollView>
    </View>
)
}
const styles = StyleSheet.create({
    container : {
       
    },
    containerText :{
        fontSize : 18,
        marginLeft : 10,
    },
    card : {
      width: '90%',
      height : 150,
     
      alignItems : 'center',
      margin : 10,
      shadowOffset : {width : 1,height : 1},
      shadowRadius : 3,
      shadowOpacity : 0.1,
      elevation : 5,
    },
    cardContainer : {
      
    },
    
    contentContainer : {
     
      
    },
   
  });
export default Recent;
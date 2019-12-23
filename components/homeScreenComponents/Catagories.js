import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
 
 
} from 'react-native';


import Card from './Card';

const Catagories=(props)=>{
return(
    <ScrollView  style={styles.cardContainer}   contentContainerStyle={styles.contentContainer} horizontal={true} >
       
    <Card style={styles.card}>
      <Text>Catagorie 1 </Text>
    </Card>
    <Card style={styles.card}>
      <Text>Catagorie 2</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Catagorie 3</Text>
    </Card>
    <Card style={styles.card}>
      <Text> Catagorie  4</Text>
    </Card>
    <Card style={styles.card}>
      <Text>Catagorie 5</Text>
    </Card>
  
    </ScrollView>
)
}
const styles = StyleSheet.create({
    card : {
      width: 200,
      height : 150,
     
      alignItems : 'center',
      margin : 10
    },
    cardContainer : {
        flexDirection : 'row',
      height : 170
    },
    
    contentContainer : {
      flexDirection : 'row',
      
    },
   
  });
export default Catagories;
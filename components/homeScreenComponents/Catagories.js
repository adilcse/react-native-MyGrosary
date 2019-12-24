import React from 'react';
import {
 
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Ionicons } from "@expo/vector-icons";

import Card from './Card';
import Colors from '../../constants/Colors'


const Catagories=(props)=>{
return(
  <View style={styles.container}>
    <View style={styles.headingContainer}>
      <Text style={{fontSize : 18,}}>Catagories </Text>
      <TouchableOpacity  onPress={() =>{
      
         props.navigation.navigate('CatagoriesScreen')}
         }>
      <Card style={styles.heading}>
      <Text style={{fontSize : 14,color : 'white',paddingRight:5 }}> 
        View All</Text>
        <Ionicons name="md-arrow-round-forward" size={25} color="white" />
      
    </Card></TouchableOpacity></View>
    <ScrollView  style={styles.cardContainer}   contentContainerStyle={styles.contentContainer} horizontal={true} >
      <TouchableOpacity onPress={() =>{
      
      props.navigation.navigate('ItemsScreen',{cat : 'catagory 1'})}
      }>
    <Card style={styles.card} > 
      <Text>Catagory 1 </Text>
    </Card></TouchableOpacity> 
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
   
  
    </ScrollView></View>
)
}
const styles = StyleSheet.create({
  container:{
    alignContent : 'center',
    
  }
  ,
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
    heading : {
     
      flexDirection : 'row',
      paddingLeft : 10
      ,
      width:96,
       height:40,
       backgroundColor : Colors.button
      
    },
    headingContainer : {
      marginVertical : 5,
      marginHorizontal:10,
      justifyContent : 'space-between',
      alignContent : 'center',
      flexDirection : 'row',
    width : '95%',
  

    
    }
   
  });
export default Catagories;
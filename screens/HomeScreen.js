import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
 
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Location from '../components/Location';

import { DrawerActions } from 'react-navigation-drawer';
import Card from '../components/homeScreenComponents/Card';

import Catagories from '../components/homeScreenComponents/Catagories';
import TodaySpecial from '../components/homeScreenComponents/TodaySpecial';
import Recent from '../components/homeScreenComponents/Recent';
import LocationScreen from './LocationScreen'

export default HomeScreen=(props)=> {

  return (
    <View style={styles.container}>
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerRoot}>
       <Location {...props}/>
      <Catagories {...props}/>
      <TodaySpecial {...props}/>
      <Recent  {...props}/>
      </ScrollView>

     
   
      
    </View>
  );
   
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  contentContainerRoot: {
    paddingTop: 27,
  },
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


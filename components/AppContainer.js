import React from 'react';
import { createAppContainer ,createStackNavigator } from 'react-navigation';

import AppNavigator from '../navigation/AppNavigator';
import LocationScreen from '../screens/LocationScreen';
import SearchScreen from '../screens/SearchScreen';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import ItemsScreen from '../screens/ItemsScreen';
const RootStack = createStackNavigator({ 
App :{
    screen :AppNavigator,
    navigationOptions : {
        header : null,

    }
},
LocationScreen :{
    screen :LocationScreen,
    navigationOptions : {
        headerTitle : 'LocationSearch',
        
    }
},
SearchScreen :{
    screen :SearchScreen,
    navigationOptions : {
        headerTitle : 'Search ',
        
    }
},
CatagoriesScreen :{
    screen :CatagoriesScreen,
    navigationOptions : {
        headerTitle : 'Catagories ',
        
    }
},
ItemsScreen :{
    screen :ItemsScreen,
    navigationOptions :({ navigation })=> ({
        headerTitle :  `${navigation.state.params.cat}`,
        
    })
}
 },
 {
    initialRouteName: 'App',
  }
 );
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
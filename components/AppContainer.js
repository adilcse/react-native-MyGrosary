import React from 'react';
import { createAppContainer ,createStackNavigator } from 'react-navigation';

import AppNavigator from '../navigation/AppNavigator';
import LocationScreen from '../screens/LocationScreen';
import SearchScreen from '../screens/SearchScreen';
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
}

 },
 {
    initialRouteName: 'App',
  }
 );
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
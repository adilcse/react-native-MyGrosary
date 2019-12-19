import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SettingsScreen from '../screens/SettingsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';

  
export  default createDrawerNavigator(
  {
  
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: HomeScreen
    },

    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: SettingsScreen
    },

 
  },
  
  )

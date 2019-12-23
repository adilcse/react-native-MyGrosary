import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer   } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainTabNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';
export default createAppContainer(
DrawerNavigator
    )
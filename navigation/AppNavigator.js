import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MessagesScreen from '../screens/MessagesScreen';
import HomeScreen from '../screens/HomeScreen';
import VisitsScreen from '../screens/VisitsScreen';

const AppStack = createStackNavigator({ Messages: MessagesScreen, Visits: VisitsScreen });
const AuthStack = createStackNavigator({ Home: HomeScreen });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  App: AppStack,
  Auth: AuthStack
});
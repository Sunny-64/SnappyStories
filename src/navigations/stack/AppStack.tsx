import { useState } from 'react';
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from '../drawer';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const AppStack = () => {
  const isLoggedIn = true; 
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        {
          isLoggedIn ? 
          <Stack.Screen name='AppStack' component={DrawerNavigation}/>
          :
          <Stack.Screen name='AuthStack' component={AuthStack}/>
        }
    </Stack.Navigator>
  )
}

export default AppStack
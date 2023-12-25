import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';
import AppStack from './stack/AppStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AppStack />
    </NavigationContainer>
  )
}

export default RootNavigation
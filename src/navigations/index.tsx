import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';
import AppStack from './stack/AppStack';
import { resetReduxState } from '../redux/store';
// import { useSelector } from 'react-redux';

const RootNavigation = () => {
  // const token = useSelector((state:any) => state.auth.token); 
  // console.log("Token fetched through selector in App.ts...", token);
  // resetReduxState(); for reseting all the states...
  return (
    <NavigationContainer>
        <AppStack />
    </NavigationContainer>
  )
}

export default RootNavigation
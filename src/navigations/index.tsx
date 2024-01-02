import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// Custom imports 
import AppStack from './stack/AppStack';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import AuthStack from './stack/AuthStack';
import DrawerNavigation from './drawer';
import { initializeSocket } from '../sockets';

const Stack = createStackNavigator();
const RootNavigation = () => {
  const getIsLoggedIn = useSelector((state:any) => state.auth.isLoggedIn); 
  initializeSocket(); 
  return (
    <NavigationContainer>
        {/* <AppStack /> */}
        <Stack.Navigator screenOptions={{headerShown : false}}>
        {
          getIsLoggedIn ? 
          <>
          <Stack.Screen name='DrawerNavigation' component={DrawerNavigation}/>
          <Stack.Screen name='AppStack' component={AppStack}/>
          </>
          :
          <Stack.Screen name='AuthStack' component={AuthStack}/>
        }
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
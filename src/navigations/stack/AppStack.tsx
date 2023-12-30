import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

// Custom imports 
import DrawerNavigation from '../drawer';
import AuthStack from './AuthStack';
const Stack = createStackNavigator();

const AppStack = () => {
  const getIsLoggedIn = useSelector((state:any) => state.auth.isLoggedIn); 
  console.log(getIsLoggedIn)

  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        {
          getIsLoggedIn ? 
          <Stack.Screen name='AppStack' component={DrawerNavigation}/>
          :
          <Stack.Screen name='AuthStack' component={AuthStack}/>
        }
    </Stack.Navigator>
  )
}

export default AppStack
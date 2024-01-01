import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

// Custom imports 
import { Conversation } from '../../screens';

const Stack = createStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='Conversation' component={Conversation}/> 
    </Stack.Navigator>
  )
}

export default AppStack
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, VerifyOtp, Welcome } from '../../screens';
import { OFF_WHITE } from '../../constants/colors';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false,
        cardStyle : {
          backgroundColor : OFF_WHITE
        }
      }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='VerifyOtp' component={VerifyOtp} />
    </Stack.Navigator>
  )
}

export default AuthStack
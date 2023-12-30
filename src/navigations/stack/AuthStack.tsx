import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Custom imports 
import { ForgotPassword, Login, Register, ResetPassword, VerifyOtp, Welcome } from '../../screens';
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
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />

    </Stack.Navigator>
  )
}

export default AuthStack
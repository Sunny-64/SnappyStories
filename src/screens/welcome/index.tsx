import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationAction } from '@react-navigation/native'

const Welcome = ({navigation} : {navigation : any}) => {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login"); 
        }}
      >
          <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome
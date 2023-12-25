import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation} : {navigation : any}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
          <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
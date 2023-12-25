import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = ({navigation} : {navigation : any}) => {
  return (
    <View>
      <Text>Register</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
          <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register
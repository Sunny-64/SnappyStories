import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { logo } from '../../assets/png'
import { PURPLE_ACCENT } from '../../constants/colors'
import styles from './style'

const ResetPassword = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={styles.backHandler}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name='arrow-circle-left' size={22} color={PURPLE_ACCENT} />
        </TouchableOpacity>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis.</Text>

          {/* Input Field */}
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter a new password"
            // value={email}
            // onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* Input Field */}
          <View>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter a new password"
            // value={email}
            // onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>


        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPassword
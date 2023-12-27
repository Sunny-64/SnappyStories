import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { PersonHoldingABook } from '../../assets/svgs'
import { Dimensions } from 'react-native'
import { logo } from '../../assets/png'

const Welcome = ({ navigation }: { navigation: any }) => {
  const { width, height } = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <View style={{ width: width, flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <View style={styles.introduction}>
        {/* <Text style={styles.title}>Welcome to Your App</Text> */}
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { logo } from '../../assets/png'
import styles from './style'
import { PURPLE_ACCENT } from '../../constants/colors'

const VerifyOtp = ({ navigation, route }: { navigation: any, route : any }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const redirectTo = route.params?.redirectTo;
  const inputs: any = [];
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };
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
          <Text style={styles.title}>Verify Otp</Text>
          <Text style={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis.</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.box}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(value) => handleOtpChange(value, index)}
                value={digit}
                ref={(input) => {
                  inputs[index] = input;
                }}
              />
            ))}
          </View>
          <View style={styles.resendOtpContainer}>
                <Text>Didn't get OTP ? </Text>
                <TouchableOpacity>
                    <Text>Resend OTP</Text>
                </TouchableOpacity>
          </View>
          <View >
                <Text style={styles.timer}>Expires in <Text style={styles.counter}>03:00</Text></Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
        onPress={() => navigation.navigate(redirectTo)}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VerifyOtp
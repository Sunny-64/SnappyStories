import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { logo } from '../../assets/png';
import { PURPLE_ACCENT } from '../../constants/colors';

const ForgotPassword = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
 

  const handleResetPassword = () => {
    // Implement your logic for password reset here
    console.log('Resetting password for:', email);
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
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis.</Text>

        {/* Input Field */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VerifyOtp", {
              redirectTo : 'ResetPassword'
          })}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

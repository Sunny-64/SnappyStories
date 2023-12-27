import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { PersonHoldingABook } from '../../assets/svgs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { logo } from '../../assets/png';

const Login = ({ navigation }: { navigation: any }) => {
  const { width, height } = Dimensions.get('screen');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View >
        {/* <PersonHoldingABook width={width / 2 * 1.2} height={height / 2 * 0.7} style={{ transform: 'scale(0.3)' }} /> */}
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />

        <View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log(">>>>Pressed in login cop")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPasswordTxt}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </View>


        {/* OAuth Icons */}
        <View style={styles.oauthContainer}>
          <View>
            <Text style={styles.continueWithTxt}>Continue With</Text>
          </View>
          <View style={styles.oauthIconContainer}>
            <TouchableOpacity style={styles.oauthIcon}>
              <FontAwesome5 name={'google'} size={30} color="#DB4437" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.oauthIcon}>
              <FontAwesome5 name={"facebook-square"} size={30} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.oauthIcon}>
              <FontAwesome5 name={"twitter-square"} size={30} color="#1DA1F2" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.horizontalLineContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.signupText}>Don't have an account? Sign up here.</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { logo } from '../../assets/png';
import styles from './style';
import { PURPLE_ACCENT } from '../../constants/colors';

const Register = ({ navigation }: { navigation: any }) => {
  const { width, height } = Dimensions.get('screen');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} >
        <View style={styles.logoContainer}>
          <TouchableOpacity 
            style={styles.backHandler}
            onPress={() => navigation.goBack()}
          >
              <FontAwesome5 name='arrow-circle-left' size={22} color={PURPLE_ACCENT}/>
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
          />
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

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            autoCapitalize="none"
          />

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

          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("clicked in register comp")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Already have an account? Login here.</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native';
import { PersonHoldingABook } from '../../assets/svgs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { logo } from '../../assets/png';
import { loginSchema } from '../../validations';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { IAuth, setAuth } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }: { navigation: any }) => {
  const { width, height } = Dimensions.get('screen');
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const handleLogin = async (data: any) => {
    try {

      if (!isValid) throw new Error("Invalid inputs");
      const response = await api.login(data);
      if (response.status === 500) Alert.alert("Internal server error");
      if (response.status === 400) Alert.alert("client error");
      dispatch(setAuth({ token: response?.data?.token }));
      // console.log(response.data); 
      if (response?.data?.otpType === 'verify email') {
        return navigation.navigate("VerifyOtp", {
          redirectTo: 'AppStack',
          apiToCall: 'verify-email'
        }); 
      }

      dispatch(setAuth({isLoggedIn : true}));
    }
    catch (err) {
      console.log(err);
      Alert.alert("invlaid inputs");
    }
  }

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
        <Controller
          name='email'
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <View>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </View>
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <View>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </View>
          )}
        />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleLogin)}
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

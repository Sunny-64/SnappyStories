import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from 'react-redux';

// Custom Imports
import { logo } from '../../assets/png';
import styles from './style';
import { PURPLE_ACCENT } from '../../constants/colors';
import { registerSchema } from '../../validations';
import api from '../../services/api';
import { setAuth } from '../../redux/auth/authSlice';

const Register = ({ navigation }: { navigation: any }) => {
  const { width, height } = Dimensions.get('screen');
  const dispatch = useDispatch(); 

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit = async (data: any) => {
    try{
      if (!isValid) {
        Alert.alert("not valid");
        return;
      }
      const response = await api.register(data); 
      if(response.status === 500){
          Alert.alert("Internal Server Error"); 
          return; 
      }
      if(response.status === 400){
        Alert.alert("Invalid inputs", response?.data?.error); 
        return; 
      }
      const payload = {
          email : data?.email, 
          password : data?.password, 
          token : response?.data?.token, 
      }
      dispatch(setAuth(payload))
      navigation.navigate("VerifyOtp", {
        redirectTo: "Login",
        apiToCall : "verify-email"
      })
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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

      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} >

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
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Text style={[styles.label, { color: errors?.username?.message && 'red' }]}>Username:</Text>
                <TextInput
                  style={[styles.input, { borderColor: errors?.username?.message && 'red' }]}
                  placeholder="Enter your username"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Text style={[styles.label, { color: errors?.email?.message && 'red' }]}>Email:</Text>
                <TextInput
                  style={[styles.input, { borderColor: errors?.email?.message && 'red' }]}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Text style={[styles.label, { color: errors?.password?.message && 'red' }]}>Password:</Text>
                <TextInput
                  style={[styles.input, { borderColor: errors?.password?.message && 'red' }]}
                  placeholder="Enter your password"
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name='confirmPassword'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Text style={[styles.label, { color: errors?.confirmPassword?.message && 'red' }]}>Confirm Password:</Text>
                <TextInput
                  style={[styles.input, { borderColor: errors?.confirmPassword?.message && 'red' }]}
                  placeholder="Confirm your password"
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </View>
            )}

          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
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

import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from '../../components/global/CustomText';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import useAuthStore from '../../store/Store';
//import * as Yup from 'yup';

interface Credentials {
  email: string
  password: string
} 

const EmailLoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const [secure, setSecure] = useState(true)
  const [userCredentials, setUserCredentials] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleSecureText = () => {
    setSecure(!secure);
  };

  const setToken = useAuthStore((state) => state.setToken);
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, userCredentials)
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        const userToken = response.data
        setToken(userToken)
        navigation.navigate('Root', { screen: 'Home', initial: false });
      } else {
        console.log('Unexpected response:', response);
      }
    } catch (error) {
      console.log('Unexpected response error:', error);
    }
  }

  return (
    <SafeAreaView style={styles.EmailLoginScreen}>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton} activeOpacity={0.8}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.Welcome}>
          <CustomText variant='h2'>Welcome back!</CustomText>
          <CustomText variant='small_X' style={styles.subtile}>efficitur non finibus eu, convallis iaculis ex.efficitur non finibus eu, convallis iaculis ex. efficitur non finibus eu, convallis iaculis ex.</CustomText>
        </View>
        <View style={styles.loginForm}>
          <View>
            <CustomText variant='small' style={styles.label}>Email address</CustomText>
            <TextInput
              value={userCredentials.email}
              onChangeText={(text) => setUserCredentials({ ...userCredentials, email: text })}
              style={styles.TextInput}
              placeholder='Enter your email address'
            />
            <CustomText variant='small' style={styles.label}>Password</CustomText>
            <View>
              <TextInput
                value={userCredentials.password}
                onChangeText={(text) => setUserCredentials({ ...userCredentials, password: text })}
                style={styles.TextInputPassword}
                placeholder='Enter password'
                secureTextEntry={secure}
              />
              <Icon
                name={secure ? 'eye-off' : 'eye'}
                size={20}
                color="#000"
                style={styles.icon}
                onPress={toggleSecureText}
              />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
              <CustomText variant='Body_text' style={styles.EmailText}>Login</CustomText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={handleBackPress} >
              <CustomText variant='small' style={styles.loginPhone}>Login with phone number</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  EmailLoginScreen: {
    backgroundColor: Colors.theme,
    height: hp('100%'),
  },
  container: {
    paddingHorizontal: 28,
    paddingTop: 10,
    justifyContent: 'flex-start',
    flex: 1,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.bg_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Welcome: {
    marginTop: 20,
    color: Colors.Regular
  },
  subtile: {
    paddingTop: 6,
    lineHeight: 12,
    textAlign: "left",
    color: Colors.Regular
  },
  loginForm: {
    paddingTop: 30,
    marginHorizontal: -28,
    paddingHorizontal: 28,
    backgroundColor: Colors.mintYellow,
    height: hp('80%'),
    width: wp('100%'),
    marginTop: 20,
    borderRadius: 38,
    padding: 16,
  },
  TextInput: {
    borderRadius: 4,
    backgroundColor: Colors.bg_white,
    borderStyle: "solid",
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  TextInputPassword: {
    borderRadius: 4,
    backgroundColor: Colors.bg_white,
    borderStyle: "solid",
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  label: {
    color: Colors.Regular,
    paddingVertical: 4,
  },
  EmailText: {
    color: Colors.Regular,
  },
  button: {
    borderRadius: 4,
    backgroundColor: Colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 13,
    marginTop: 15,
  },
  loginPhone:{ 
    justifyContent:'center',
    paddingTop:5
  }
});

export default EmailLoginScreen;

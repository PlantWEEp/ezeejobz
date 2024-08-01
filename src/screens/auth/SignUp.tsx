import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from '../../components/global/CustomText';
import axios from 'axios';
import {BASE_URL} from '../../utils/config';
import useAuthStore from '../../store/Store';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {ActivityIndicator} from 'react-native';
import {GestureResponderEvent} from 'react-native';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleSecureText = () => {
    setSecure(!secure);
  };
  const setToken = useAuthStore(state => state.setToken);

  const handleLogin = async (
    values: LoginFormValues,
    event: GestureResponderEvent,
  ) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, values);

      if (response.status === 200) {
        const {access_token} = response.data.data;
        const userToken = {access_token};
        await setToken(userToken);
        navigation.navigate('Main');
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.SignUp}>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backButton}
          activeOpacity={0.8}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.Welcome}>
          <CustomText variant="h2">Create Account</CustomText>
          <CustomText variant="small_X" style={styles.subtile}>
            efficitur non finibus eu, convallis iaculis ex.efficitur non finibus
            eu, convallis iaculis ex. efficitur non finibus eu, convallis
            iaculis ex.
          </CustomText>
        </View>
        <View style={styles.loginForm}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={handleLogin}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }: FormikProps<LoginFormValues>) => (
              <>
                {/* Full Name */}
                <CustomText variant="small" style={styles.label}>
                  Full Name *
                </CustomText>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  style={styles.TextInput}
                  placeholder="Enter your full name"
                />
                {touched.email && errors.email && (
                  <CustomText variant="small" style={styles.errorText}>
                    {errors.email}
                  </CustomText>
                )}

                {/* Phone number  */}
                <CustomText variant="small" style={styles.label}>
                Phone number *
                </CustomText>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  style={styles.TextInput}
                  placeholder="Enter your phone number"
                />
                {touched.email && errors.email && (
                  <CustomText variant="small" style={styles.errorText}>
                    {errors.email}
                  </CustomText>
                )}

                {/* Email address */}
                <CustomText variant="small" style={styles.label}>
                  Email address
                </CustomText>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={styles.TextInput}
                  placeholder="Enter your email address"
                />
                {touched.email && errors.email && (
                  <CustomText variant="small" style={styles.errorText}>
                    {errors.email}
                  </CustomText>
                )}

                {/* Password */}
                <CustomText variant="small" style={styles.label}>
                  Create a password
                </CustomText>
                <View>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    style={styles.TextInputPassword}
                    placeholder="Create a password"
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
                {touched.password && errors.password && (
                  <CustomText style={styles.errorText} variant="small">
                    {errors.password}
                  </CustomText>
                )}
                {/*Confirm Password */}
                <CustomText variant="small" style={styles.label}>
                Confirm password
                </CustomText>
                <View>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    style={styles.TextInputPassword}
                    placeholder="Confirm password"
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
                {touched.password && errors.password && (
                  <CustomText style={styles.errorText} variant="small">
                    {errors.password}
                  </CustomText>
                )}
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={handleSubmit}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color={Colors.bg_white} />
                  ) : (
                    <CustomText variant="Body_text" style={styles.buttonText}>
                      Sign Up
                    </CustomText>
                  )}
                </TouchableOpacity> 
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: Colors.theme,
   flex:1
  },
  container: {
    paddingHorizontal: 28,
    paddingTop: 10,
    justifyContent: 'flex-start',
    flexGrow: 1, 
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
    color: Colors.Regular,
  },
  subtile: {
    paddingTop: 6,
    lineHeight: 12,
    textAlign: 'left',
    color: Colors.Regular,
  },
  loginForm: {
    paddingTop: 30,
    marginHorizontal: -28,
    paddingHorizontal: 28,
    backgroundColor: Colors.mintYellow,
    height: hp('80%'),
    width: wp('100%'),
    marginTop: 20,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    padding: 16,
  },
  TextInput: {
    borderRadius: 4,
    backgroundColor: Colors.bg_white,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  TextInputPassword: {
    borderRadius: 4,
    backgroundColor: Colors.bg_white,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: 'relative',
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
  loginPhone: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  errorText: {
    color: Colors.danger,
  },
  buttonText: {
    color: Colors.Regular,
  },
  errorMessage: {
    color: Colors.danger,
    paddingTop: 3,
    marginBottom: -2,
  },
});

export default SignUp;

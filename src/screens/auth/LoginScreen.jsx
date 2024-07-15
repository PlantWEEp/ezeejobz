import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/Colors'; 
import { FONTS } from '../../constants/Fonts';
import CustomText from '../../components/global/CustomText';

const backgroundImage = require('../../assets/image/themebg.png');
const job = require('../../assets/image/job-posting.png');
const flag = require('../../assets/image/india.png');

export default function LoginScreen({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={backgroundImage} style={styles.background} />
        <View style={styles.containerSection}>
          <View style={styles.wrapperImage}>
            <Image
              style={styles.jobPostingIcon}
              resizeMode="cover"
              source={job}
            />
          </View>
          <Text style={styles.quickEasy}>Quick & Easy Job Posting</Text>
          <CustomText variant='small' fontFamily={FONTS.Bold} style={styles.getQualityApplies}>
            Get Quality Applies. No Middlemen. No commission, get your job done
            and pay them straight.
          </CustomText>
          <View style={styles.loginSection}>
            <Text style={styles.enterYourMobile}>Enter your mobile number</Text>
          </View>
          <View style={styles.groupParent}>
            <View style={styles.groupContainer}>
              <View style={styles.containerFlag}>
                <Image source={flag} style={styles.flag} />
              </View>
              <View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor: isFocused ? Colors.theme : Colors.grey,
                    },
                  ]}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your phone number"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.ContainerlineOr}>
              <View style={styles.line1} />
              <Text style={styles.or}>OR</Text>
              <View style={styles.line2} />
            </View>
            <View style={styles.buttonWapper}>
              <TouchableOpacity style={styles.buttonEmail}  activeOpacity={0.8}
              onPress={() => navigation.navigate('EmailLoginScreen')}>
                <Text>Login with email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonEmail} activeOpacity={0.8}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    width: wp('100%'),
    height: hp('38%'),
    resizeMode: 'cover',
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 0,  
      },
      android: {
        top: 0,  
      },
    }),
  },
  containerSection: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  wrapperImage: {
    paddingTop: 120,
    paddingBottom: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickEasy: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: FONTS.Black,
    color: Colors.Regular,
    textAlign: 'center',
  },
  getQualityApplies: {  
    textAlign: 'center',
    marginTop: 10,
  },
  enterYourMobile: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
    color: Colors.Regular,
    marginTop: 10,
  },
  loginSection: {
    width: '100%',
    color: Colors.Regular,
  },
  groupParent: {
    marginTop: 5,
  },
  groupContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 7,
  },
  containerFlag: {
    backgroundColor: Colors.frozen,
    padding: 12,
    borderStyle: 'solid',
    borderColor: Colors.theme,
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#ffcc00',
    width: wp('75%'),
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  button: {
    borderRadius: 4,
    backgroundColor: Colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 13,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: Colors.Regular,
  },
  ContainerlineOr: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginVertical: 10,
  },
  line1: {
    width: wp('40%'),
    borderStyle: 'solid',
    borderColor: '#c5c7ca',
    borderTopWidth: 1,
    height: 1,
  },
  or: {
    fontSize: 8,
    lineHeight: 15,
    fontFamily: 'Inter-Regular',
    color: '#000',
    textAlign: 'center',
    width: 17,
  },
  line2: {
    width: wp('40%'),
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderTopWidth: 1,
    height: 1,
  },
  buttonEmail: {
    borderRadius: 4,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 13,
    width:'50%',
    color:Colors.Regular
  },
  buttonWapper:{
    flexDirection:'row',
    gap: 10
  }
});

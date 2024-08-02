import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../../components/global/CustomText';
import {Colors} from '../../constants/Colors';
import TopHeader from '../../components/features/TopHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const avatar = require('../../assets/image/profileimage.png');
const settings = require('../../assets/image/settingsPng.png');
const location = require('../../assets/image/locationPng.png');
const lock = require('../../assets/image/lock.png');
const arrowright = require('../../assets/image/arrow-right.png');

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <View style={styles.yellowBg}>
        <TopHeader />
      </View>
      <View style={styles.bgWapper}>
        <View style={styles.Wappper}>
          <Image source={avatar} style={styles.profileImage} />
          <View style={styles.profileaWapper}>
            <CustomText variant="h2" style={styles.name}>
              Vaishnav R V
            </CustomText>
            <CustomText variant="small">+91 9447 56 2363</CustomText>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.box} activeOpacity={0.8}>
            <Image source={settings} style={styles.icon} />
            <CustomText variant="Body_text">Profile Settings</CustomText>
            <CustomText variant="small_X" style={styles.setttingstext}>
              efficitur non finibus eu, convallis iaculis ex.
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} activeOpacity={0.8}>
            <Image source={location} style={styles.icon} />
            <CustomText variant="Body_text">Add Location</CustomText>
            <CustomText variant="small_X" style={styles.setttingstext}>
              efficitur non finibus eu, convallis iaculis ex.
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bgWapper2}>
        <CustomText variant="Body_text" style={styles.changePassword}> 
          <Image source={lock} /> Change Password <Image source={arrowright} />
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  yellowBg: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Colors.theme,
    paddingBottom: 18,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bgWapper2: {
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: Colors.frozen,
    borderRadius: 4,
  },
  changePassword:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgWapper: {
    marginHorizontal: 15,
    marginVertical: 24,
    padding: 10,
    backgroundColor: Colors.frozen,
    borderRadius: 4,
    paddingBottom: 10,
  },
  name: {
    fontWeight: '600',
  },
  Wappper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 37.5,
    marginRight: 15,
  },
  profileaWapper: {
    flex: 1,
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  box: {
    width: wp('43.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mintYellow,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginBottom: 15,
    width: 40,
    height: 44,
    resizeMode: 'contain',
  },
  setttingstext: {
    paddingTop: 5,
    textAlign: 'center',
  },
});

export default ProfileScreen;

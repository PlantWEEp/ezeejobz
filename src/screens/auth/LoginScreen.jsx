import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../constants/Colors'; // Adjust path as necessary
import { FONTS } from '../../constants/Fonts'; // Adjust path as necessary

const backgroundImage = require("../../assets/image/themebg.png");
const job = require("../../assets/image/job-posting.png");
const flag = require("../../assets/image/india.png");

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={backgroundImage} style={styles.background} />
        <View style={styles.containerSection}>
          <View style={styles.wrapperImage}>
            <Image style={styles.jobPostingIcon} resizeMode="cover" source={job} />
          </View>
          <Text style={styles.quickEasy}>Quick & Easy Job Posting</Text>
          <Text style={styles.getQualityApplies}>Get Quality Applies. No Middlemen. No commission, get your job done and pay them straight.</Text>
          <View style={styles.loginSection}>
            <Text style={styles.enterYourMobile}>Enter your mobile number</Text>
          </View>
          <View style={styles.groupParent}>
            <View style={styles.groupContainer}>
              <Image source={flag} style={styles.flag} />
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
  },
  containerSection: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  wrapperImage: {
    paddingTop: 110,
    paddingBottom: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickEasy: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: Colors.Regular,
    textAlign: 'center',
    marginTop: 10,
  },
  getQualityApplies: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "Inter-Regular",
    color: Colors.Regular,
    textAlign: 'center',
    marginTop: 10,
  },
  enterYourMobile: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "Inter-Regular",
    color: Colors.Regular,
    marginTop: 10,
  },
  loginSection: {
    width: '100%', 
    marginTop: 20,
  },
  groupParent: {
    marginTop: 20,
  },
  groupContainer: {
    alignItems: 'center',
  },
});

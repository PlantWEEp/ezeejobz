import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../constants/Colors';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../../components/global/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const avatar = require('../../assets/image/avatar.png') 


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView>
        <View style={styles.yellowBg}>
          <View style={styles.wapperHeader}>
            <TouchableOpacity style={styles.backButton} activeOpacity={0.8}>
              <Icon name="location" size={26} color="#000" />
              <View>
                <CustomText variant="small_X" style={styles.Location}>
                  Location
                </CustomText>
                <CustomText variant="small" style={styles.Location}>
                  Thiruvananthapuram
                </CustomText>
              </View>
            </TouchableOpacity>
            <View style={styles.rightSection}>
              <TouchableOpacity  activeOpacity={0.8}>
                <FontAwesome name="bell-o" size={26} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity  activeOpacity={0.8}>
                <View>
                  <Image source={avatar} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity  activeOpacity={0.8} style={styles.searchSection}>
              <CustomText variant='small'>Search here</CustomText>
              <Icon name='search' size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}> 
          <View style={styles.AdBanner}>
              <CustomText variant='h3' style={styles.PosterHeading}>
              Quick & Easy Job Posting
              </CustomText>
              <CustomText variant='small' style={{textAlign:'center', color:Colors.Regular,paddingTop:5}}>
              Get Quality Applies. No Middlemen. No commission, get your job done and pay them straight.
              </CustomText>
          </View>
          <View style={{marginTop:20}}> 
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    position: 'relative',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  Location: {
    color: Colors.Regular,
  },
  wapperHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    gap: 10
  },
  searchSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 4,
    backgroundColor: Colors.bg_white
  },
  yellowBg:{
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor:Colors.theme,
    paddingBottom:18, 
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  AdBanner:{
    backgroundColor:Colors.mintYellow,
    height:227,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    padding:15,
  },
  PosterHeading:{
    color:Colors.Regular,
    fontWeight:500
  }
});

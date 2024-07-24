import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context'; 
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../constants/Colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../../components/global/CustomText';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView>
        <View style={styles.yellowBg}> 
        </View>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.8}>
            <Icon name="location" size={26} color="#000" />
            <View style={styles.wappeLocation}>
              <CustomText variant='small_X' style={styles.Location}>Location</CustomText>
              <CustomText variant='small' style={styles.Location}>Thiruvananthapuram</CustomText>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    position:'relative'
  }, 
  backButton:{
    flexDirection:'row',
    alignItems:'center',
    gap:10, 
  },
  Location:{
    color:Colors.Regular
  },
  wappeLocation:{

  }
});

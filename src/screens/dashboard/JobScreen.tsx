import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../components/global/CustomText'
import { Colors } from '../../constants/Colors'
import TopHeader from '../../components/features/TopHeader'
import JobListing from '../../components/features/JobListing'

const JobScreen = () => {
  return (
    <SafeAreaView> 
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <View style={styles.yellowBg}>
        <TopHeader/>
      </View>
      <View>
      <JobListing/>
      </View>
      <View style={styles.FooterSection} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({ 
  yellowBg: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Colors.theme,
    paddingBottom: 18,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25, 
  },
  FooterSection:{
   height: 1,
   backgroundColor: '#fff0'
  }
})
export default JobScreen
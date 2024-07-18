import { View, Text, ScrollView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/Octicons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <ScrollView> 
        <View style={styles.yellowBg}/>
      <TouchableOpacity  style={styles.backButton} activeOpacity={0.8}>
          <Icon name="location" size={24} color="#000" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:28,
    paddingTop:10
  },
})
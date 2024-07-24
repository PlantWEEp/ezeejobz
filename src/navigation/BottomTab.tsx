import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import JobScreen from '../screens/dashboard/JobScreen';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import CustomText from '../components/global/CustomText';
import { Colors } from '../constants/Colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          ...styles.shadow, 
          borderRadius: 999,
          height:60,
          paddingRight:10
        },
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.yellowBgMenu, { backgroundColor: focused ? Colors.theme : Colors.frozen }]}>
              <Icon name="home" size={24} color={Colors.Regular} />
              <CustomText variant='small'>Home</CustomText>
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="Jobs" 
        component={JobScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
           <View style={[styles.yellowBgMenu, { backgroundColor: focused ? Colors.theme : Colors.frozen }]}>
              <Icon name="briefcase" size={24} color={Colors.Regular}  />
              <CustomText variant='small'>Jobs</CustomText>
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.yellowBgMenu, { backgroundColor: focused ? Colors.theme : Colors.frozen }]}>
              <Icon name="person" size={24} color={Colors.Regular}  />
              <CustomText variant='small'>My Profile</CustomText>
            </View>
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16.4,
    elevation: 16.4,
  },
  yellowBgMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    color: Colors.Regular,
    paddingVertical:6,
    paddingHorizontal:12, 
    borderRadius: 999,
  }
});

export default BottomTabs;

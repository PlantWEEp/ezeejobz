import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList, 
  Image,
} from 'react-native';
import React from 'react';
import CustomText from '../global/CustomText';
import {Colors} from '../../constants/Colors';
import Data from '../../utils/Data';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
  const navigation = useNavigation();
  const renderItem = ({item}:any) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('OtpScreen')} activeOpacity={0.8}>
      <Image source={item.image} />
      <CustomText style={styles.itemText}>{item.title}</CustomText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.serviceWrapper}>
        <CustomText variant="h3" style={styles.Services}>
          Select a service
        </CustomText>
        <TouchableOpacity style={styles.showButton} activeOpacity={0.8}>
          <CustomText variant="small" style={{color: Colors.Regular}}>
            Show More
          </CustomText>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.itemListedd}
        data={Data}
        keyExtractor={item => item.id}
        renderItem={renderItem} 
        numColumns={3} 
        columnWrapperStyle={styles.columnWrapper} 
        contentContainerStyle={styles.itemListedd}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  Services: {
    color: Colors.Regular,
    fontWeight: '500',
  },
  showButton: {
    backgroundColor: Colors.theme,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 4,
  },
  serviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 10,
    color: Colors.Regular,
  },
  itemContainer: {
    flex: 1, 
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.frozen,
    margin: 4, 
    borderRadius: 4,
  },
  itemImage: {
    width: '100%',
    height: 80,
    borderRadius: 4,
  },
  itemListedd: {
    flexGrow: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between', 
  },
});

export default Services;

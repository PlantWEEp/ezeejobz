import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Data from '../../utils/Data';
import CustomText from '../global/CustomText';
import {Colors} from '../../constants/Colors';

const JobListing = ({navigation}: any) => {
  const jobLists = ({item}: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Addjob')}
      activeOpacity={0.8}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.textWapper}>
        <CustomText variant="small" style={styles.itemText}>
          {item.title}
        </CustomText>
        <CustomText variant="small_X" >{item.location}</CustomText>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.jobLists}>
      <FlatList
        style={styles.itemList}
        data={Data}
        keyExtractor={item => item.id}
        renderItem={jobLists}  
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jobLists: {
    paddingHorizontal: 15, 
  },
  itemList: {},
  itemContainer: {
    flex: 1,
    backgroundColor: Colors.frozen,
    marginVertical: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderRadius:4
  },
  textWapper:{
    
  },
  itemImage: {},
  itemText: {},
});

export default JobListing;

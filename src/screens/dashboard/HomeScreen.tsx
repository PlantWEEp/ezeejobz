import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet, 
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context'; 
import Icon from 'react-native-vector-icons/Octicons';
import {Colors} from '../../constants/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomText from '../../components/global/CustomText';
import Services from '../../components/features/Services';
import TopHeader from '../../components/features/TopHeader';


const HomeScreen = () => {
  const renderHeader = () => (
    <View>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
      <View style={styles.yellowBg}>
      <TopHeader/>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchSection}>
            <CustomText variant="small">Search here</CustomText>
            <Icon name="search" size={16} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.AdBanner}>
        <CustomText variant="h3" style={styles.PosterHeading}>
          Quick & Easy Job Posting
        </CustomText>
        <CustomText
          variant="small"
          style={{textAlign: 'center', color: Colors.Regular, paddingTop: 5}}>
          Get Quality Applies. No Middlemen. No commission, get your job done
          and pay them straight.
        </CustomText>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={[{key: 'services'}]} 
        renderItem={() => (
          <View style={styles.seriveSection}>
            <Services />
          </View>
        )}
        keyExtractor={item => item.key}
      />
      <View style={styles.FooterSection} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    position: 'relative',
  },
  searchSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 4,
    backgroundColor: Colors.bg_white,
  },
  yellowBg: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Colors.theme,
    paddingBottom: 18,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  AdBanner: {
    backgroundColor: Colors.mintYellow,
    height: 227,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  seriveSection: {
    flex: 1,
    marginHorizontal: 10,
  },
  PosterHeading: {
    color: Colors.Regular,
    fontWeight: '500',
  },
  FooterSection:{
   height: 80,
   backgroundColor: '#fff0'
  }
});

export default HomeScreen;

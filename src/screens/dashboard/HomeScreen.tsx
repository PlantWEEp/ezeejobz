import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Octicons';
import {Colors} from '../../constants/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomText from '../../components/global/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Services from '../../components/features/Services';

const avatar = require('../../assets/image/avatar.png');

const HomeScreen = () => {
  const renderHeader = () => (
    <View>
      <StatusBar backgroundColor={Colors.theme} translucent={true} />
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
            <TouchableOpacity activeOpacity={0.8}>
              <FontAwesome name="bell-o" size={26} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View>
                <Image source={avatar} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  rightSection: {
    flexDirection: 'row',
    gap: 10,
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
});

export default HomeScreen;

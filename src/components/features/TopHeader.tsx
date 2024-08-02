import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from '../global/CustomText';
import Icon from 'react-native-vector-icons/Octicons';
import {Colors} from '../../constants/Colors';

const avatar = require('../../assets/image/avatar.png');
const TopHeader = () => {
  return (
    <View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  wapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
export default TopHeader;

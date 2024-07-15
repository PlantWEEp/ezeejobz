import {
    View,
    Text,
    TextStyle,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React, {FC} from 'react';
  import {RFValue} from 'react-native-responsive-fontsize';
  import {FONTS} from '../../constants/Fonts';
  import {Colors} from '../../constants/Colors';
  
  interface Props {
    variant?:
      | 'h1'
      | 'h2'
      | 'h3'
      | 'Body_text'
      | 'small'
      | 'small_X'
      | 'Body_para';
    fontFamily?: keyof typeof FONTS;
    fontSize?: number;
    fontWeight?: TextStyle['fontWeight'];
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    numberOfLines?: number;
    onLayout?: (event: object) => void;
    onMentionPress?: (mention: string) => void;
  }
  
  const CustomText: FC<Props> = ({
    variant = 'Body_text',
    fontFamily,
    fontSize,
    fontWeight,
    style,
    children,
    numberOfLines,
    onLayout,
    onMentionPress,
  }) => {
    let computedFontSize: number;
    switch (variant) {
      case 'h1':
        computedFontSize = RFValue(fontSize || 32);
        break;
      case 'h2':
        computedFontSize = RFValue(fontSize || 24);
        break;
      case 'h3':
        computedFontSize = RFValue(fontSize || 20);
        break;
      case 'Body_text':
        computedFontSize = RFValue(fontSize || 16);
        break;
      case 'small':
        computedFontSize = RFValue(fontSize || 12);
        break;
      case 'Body_para':
        computedFontSize = RFValue(fontSize || 14);
        break;
      case 'small_X':
        computedFontSize = RFValue(fontSize || 8);
        break;
      default:
        computedFontSize = RFValue(fontSize || 12);
    }
  
    return (
      <View style={[styles.container, style]}>
        <Text
          onLayout={onLayout}
          numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
          style={[
            styles.text,
            {
              color: Colors.text,
              fontSize: computedFontSize,
              fontFamily: fontFamily ? FONTS[fontFamily] : undefined,
              fontWeight: fontWeight,
            },
            style,
          ]}>
          {children}
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    text: {
      textAlign: 'left',
    },
    mention: {
      textAlign: 'left',
    },
  });
  
  export default CustomText;
  
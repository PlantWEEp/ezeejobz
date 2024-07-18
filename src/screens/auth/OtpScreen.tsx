import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomText from '../../components/global/CustomText';

const backgroundImage = require('../../assets/image/themebg.png');
const lockOtp = require('../../assets/image/lock-otp.png');

export default function OtpScreen({navigation}:any) {
    const [otp, setOtp] = useState(Array(4).fill(''));
    const [isFocused, setIsFocused] = useState<number | null>(null);
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChangeText = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            const nextInput = index + 1;
            if (inputRefs.current[nextInput]) {
                inputRefs.current[nextInput].focus();
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    
    useEffect(() => {
        if (timer === 0) {
            navigation.goBack();  
        }
    }, [timer, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.theme} translucent={true} />
            <ImageBackground source={backgroundImage} style={styles.background} />
            <View style={styles.wrapperImage}>
                <Image resizeMode="cover" source={lockOtp} />
            </View>
            <View style={styles.wrapper}>
                <CustomText variant="Body_text" style={styles.subHeading}>
                    We have sent a verification code to this
                </CustomText>
                <CustomText variant="Body_text" style={styles.otpNumber}>
                    +91 9447 56 2363
                </CustomText>
            </View>
            <View style={styles.containerSection}>
                <View style={styles.inputWrapper}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            ref={ref => (inputRefs.current[index] = ref)}
                            style={[
                                styles.input,
                                {
                                    borderColor: isFocused === index ? Colors.theme : Colors.grey,
                                },
                            ]}
                            onFocus={() => setIsFocused(index)}
                            onBlur={() => setIsFocused(null)}
                            onChangeText={text => handleChangeText(text, index)}
                            value={value}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    ))}
                </View>
                <View>
                    <View style={styles.resendWapper}>
                        <CustomText variant="small">
                            Resend code in
                        </CustomText>
                        <CustomText style={styles.timer} variant="small">
                            {' '}
                            {timer}s
                        </CustomText>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}  activeOpacity={0.8}>
                        <CustomText>Verify</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_white,
    },
    containerSection: {
        marginHorizontal: 28,
    },
    background: {
        width: wp('100%'),
        height: hp('38%'),
        resizeMode: 'cover',
        position: 'absolute',
        top: 10,
    },
    wrapperImage: {
        paddingTop: 160,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        padding: 16,
    },
    subHeading: {
        justifyContent: 'center',
        color: Colors.Regular,
    },
    otpNumber: {
        padding: 4,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: Colors.Regular,
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('85%'),
        alignSelf: 'center',
    },
    input: {
        borderRadius: 4,
        backgroundColor: Colors.bg_white,
        borderStyle: 'solid',
        borderColor: Colors.grey,
        width: 72,
        height: 65,
        borderWidth: 1,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 4,
        backgroundColor: Colors.theme,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 13,
        marginTop: 16,
        color: Colors.Regular,
    },
    resendWapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        justifyContent: 'center',
        color: Colors.Regular,
    },
    timer: {
        color: Colors.green,
    },
});

import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../config/styles';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const GetStartedScreen = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: SCREEN_HEIGHT / 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={true}
          // autoplay={true}
          activeDotColor={'grey'}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/1.png')}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.mainText}>Enter Your pincode</Text>
            <Text style={styles.secondryText}>
              Enter your pincode to check the availability in your location.
            </Text>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/2.png')}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.mainText}>Make Your Purchase</Text>
            <Text style={styles.secondryText}>
              Choose the product of your choice and place the order.
            </Text>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/3.png')}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.mainText}>CheersByUnited</Text>
            <Text style={styles.secondryText}>
              We deliver the product right at your doorstep.
            </Text>
          </View>
        </Swiper>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Disclaimer');
          }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = globalStyles(({colors, typography}) => ({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: '5%',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: '15%',
  },
  mainText: {
    color: colors.textBlack800,
    fontFamily: typography.bold,
    fontSize: 24,
  },
  secondryText: {
    color: colors.textBlack800,
    fontFamily: typography.regular,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: '90%',
    borderRadius: 6,
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: typography.bold,
  },
}));

export default GetStartedScreen;

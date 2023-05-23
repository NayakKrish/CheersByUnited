import React from 'react';
import {
  BackHandler,
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../config/styles';
import {useNavigation} from '@react-navigation/native';

const DisclaimerScreen = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../assets/4.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>PLEASE</Text>
        <Text style={styles.confirmText}>CONFIRM YOUR AGE</Text>
        <View style={styles.triangle}></View>
      </View>
      <Text style={styles.desctext}>
        Want to get your favourite drinks delivered at your doorstep? All you
        have to do is tell us when were you born.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('GetLocation');
        }}>
        <Text style={styles.buttonText}>I AM ABOVE THE AGE OF 21</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.exitButton}
        activeOpacity={0.6}
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.exitButtonText}>EXIT</Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '90%',
        }}>
        <Text style={styles.termsandconditionText}>
          By entering this application, you hereby agree to the{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>of CheersByUnited
        </Text>
      </View>
    </View>
  );
};

const styles = globalStyles(({colors, typography}) => ({
  mainContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 300,
    height: 300,
  },
  confirmContainer: {
    width: '80%',
    backgroundColor: colors.secondary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  confirmText: {
    color: colors.white,
    fontSize: 25,
    fontFamily: typography.bold,
    textAlign: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 30,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.secondary,
    position: 'absolute',
    top: '120%',
  },
  desctext: {
    color: colors.textBlack600,
    fontSize: 15,
    textAlign: 'center',
    padding: '10%',
  },
  button: {
    backgroundColor: colors.secondary,
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
  exitButton: {
    width: '90%',
    borderRadius: 6,
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButtonText: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: typography.bold,
  },
  termsandconditionText: {
    color: colors.textBlack600,
    fontSize: 15,
    textAlign: 'center',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  linkText: {
    color: colors.linkText,
    textDecorationLine: 'underline',
  },
}));

export default DisclaimerScreen;

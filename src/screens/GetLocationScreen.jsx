import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../config/styles';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

const GetLocationScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [pincode, setPincode] = useState('');

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        const status = await Geolocation.requestAuthorization('whenInUse');
        if (status === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              routeToNextScreen(latitude, longitude);
            },
            error => {
              Alert.alert('Something went wrong!');
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          // Permission denied
          Alert.alert(
            'Location Permission',
            'Please grant location permission to use this feature.',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
        }
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'App Location Permission',
            message:
              'App needs access to your location ' +
              'so you can have awesome service.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the Location');
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              routeToNextScreen(latitude, longitude);
            },
            error => {
              // See error code charts below.
              Alert.alert('Something went wrong!');
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          Alert.alert('Please give Location permission!');
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      Alert.alert('Something went wrong!');
      console.warn(err);
    }
  };

  const routeToNextScreen = (latitude, longitude) => {
    navigation.navigate('Result', {
      lat: latitude,
      lng: longitude,
    });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require('../assets/5.png')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.mainText}>Enter Your Location</Text>
        <Text style={styles.secondryText}>
          We are currently serviceable in selected locations.
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.currentlocationBtn}
            activeOpacity={0.6}
            onPress={() => {
              requestLocationPermission();
            }}>
            <Text style={styles.buttonText}>User Current Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pincodeBtn}
            activeOpacity={0.6}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Enter Pin code manualy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* pincode modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onDismiss={() => setModalVisible(false)}>
        <View style={styles.modalBGView}>
          <View style={styles.modalMainContainer}>
            <View style={styles.closeModalBtnWrapper}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeModalBtn}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.innerMainContainer}>
              <Image
                source={require('../assets/1.png')}
                resizeMode="cover"
                style={styles.modalInnerImage}
              />
              <TextInput
                value={pincode}
                onChangeText={e => setPincode(e)}
                placeholder="Enter Pincode"
                placeholderTextColor={'grey'}
                style={styles.inputBox}
              />
              <TouchableOpacity
                style={styles.submitPincodeBtn}
                activeOpacity={0.6}
                onPress={() => {
                  if (pincode.length < 6 || pincode.length > 6) {
                    Alert.alert('Please Enter a valid pincode!');
                  } else {
                    setModalVisible(false);
                    navigation.navigate('Result', {
                      pincode: pincode,
                    });
                  }
                }}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = globalStyles(({colors, typography, transparentColors}) => ({
  mainContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
    gap: 20,
  },
  image: {
    width: '40%',
    height: '40%',
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
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: '15%',
  },
  currentlocationBtn: {
    backgroundColor: colors.secondary,
    width: '90%',
    borderRadius: 6,
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pincodeBtn: {
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
  modalBGView: {
    backgroundColor: transparentColors.black50,
    height: '100%',
  },
  modalMainContainer: {
    backgroundColor: colors.white,
    height: '50%',
    width: '100%',
    padding: '4%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  closeModalBtnWrapper: {alignItems: 'flex-end'},
  closeModalBtn: {
    borderWidth: 1,
    borderRadius: 12,
    width: 25,
    textAlign: 'center',
    fontSize: 18,
  },
  modalInnerImage: {
    width: 100,
    height: 100,
  },
  innerMainContainer: {alignItems: 'center', gap: 20},
  inputBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 6,
    padding: '4%',
    fontSize: 16,
    width: '100%',
    color: colors.textBlack800,
    fontFamily: typography.regular,
  },
  submitPincodeBtn: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: 6,
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default GetLocationScreen;

import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const ResultScreen = () => {
  const route = useRoute();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          gap: 20,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>
          {route?.params?.lat && `Ltd: ${route?.params?.lat}`}
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {route?.params?.lng && `Lgt: ${route?.params?.lng}`}
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {route?.params?.pincode && `Pincode: ${route?.params?.pincode}`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

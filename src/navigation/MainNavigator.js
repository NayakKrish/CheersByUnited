import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GetStartedScreen from '../screens/GetStartedScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';
import {NavigationContainer} from '@react-navigation/native';
import GetLocationScreen from '../screens/GetLocationScreen';
import ResultScreen from '../screens/ResultScreen';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{header: () => null}}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
        <Stack.Screen name="GetLocation" component={GetLocationScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

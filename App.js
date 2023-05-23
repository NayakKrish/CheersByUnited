import React from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;

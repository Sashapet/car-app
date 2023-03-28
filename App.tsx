import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => (
  <SafeAreaView style={{backgroundColor: Colors.lighter}}>
    <StatusBar barStyle={'dark-content'} />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: Colors.lighter}}>
      <Text>App screen</Text>
    </ScrollView>
  </SafeAreaView>
);

export default App;

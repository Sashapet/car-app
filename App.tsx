import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Navigator} from './src/navigation/Navigator';

export const App: React.FC = () => (
  <View style={styles.container}>
    <Navigator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

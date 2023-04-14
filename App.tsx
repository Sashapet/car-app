import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigator } from './src/navigation/Navigator';

export const App: React.FC = () => (
  <SafeAreaProvider>
    <Navigator />
  </SafeAreaProvider>
);

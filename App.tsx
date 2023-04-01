import React from 'react';
import { NavigationTemplate } from '@component/container/NavigationTemplate';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigator } from './src/navigation/Navigator';

export const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationTemplate>
      <Navigator />
    </NavigationTemplate>
  </SafeAreaProvider>
);

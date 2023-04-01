import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SummaryScreen } from '@screen/SummaryScreen';
import { DetailsScreen } from '@screen/DetailsScreen';
import { OffersScreen } from '@screen/OffersScreen';

import { screen } from './enum/screen';
import { StackParamList } from './type/types';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={screen.DETAILS}>
      <Stack.Screen name={screen.DETAILS} component={DetailsScreen} />
      <Stack.Screen name={screen.OFFERS} component={OffersScreen} />
      <Stack.Screen name={screen.SUMMARY} component={SummaryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

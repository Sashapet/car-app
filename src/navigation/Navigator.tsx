import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from '../ui/screen/DetailsScreen';
import {OffersScreen} from '../ui/screen/OffersScreen';
import {SummaryScreen} from '../ui/screen/SummaryScreen';
import {screen} from './enum/screen';
import {StackParamList} from './type/types';

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

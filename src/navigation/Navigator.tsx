import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SummaryScreen } from '@screen/SummaryScreen';
import { DetailsScreen } from '@screen/DetailsScreen';
import { OffersScreen } from '@screen/OffersScreen';
import { screen } from '@enums/screen';
import { Header } from '@component/header/Header';

import { StackParamList } from './type/types';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: ({ route, options }) => (
          <Header
            title={route.name}
            isBackVisible={options.headerBackVisible}
          />
        ),
      }}
      initialRouteName={screen.DETAILS}>
      <Stack.Screen
        options={{ headerTitle: 'Draudimas' }}
        name={screen.DETAILS}
        component={DetailsScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Draudimo pasiūlymai',
          headerBackVisible: true,
        }}
        name={screen.OFFERS}
        component={OffersScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Užsakymo patvirtinimas',
          headerBackVisible: true,
        }}
        name={screen.SUMMARY}
        component={SummaryScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

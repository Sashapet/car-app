import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SummaryScreen } from '@screen/SummaryScreen';
import { DetailsScreen } from '@screen/DetailsScreen';
import { OffersScreen } from '@screen/OffersScreen';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { screen } from './enum/screen';
import { StackParamList } from './type/types';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.rectangle, { paddingTop: insets.top }]} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: styles.transparent,
            headerTitleAlign: 'center',
            headerStyle: styles.transparent,
            headerShadowVisible: false,
          }}
          initialRouteName={screen.DETAILS}>
          <Stack.Screen name={screen.DETAILS} component={DetailsScreen} />
          <Stack.Screen name={screen.OFFERS} component={OffersScreen} />
          <Stack.Screen name={screen.SUMMARY} component={SummaryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    height: 20,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

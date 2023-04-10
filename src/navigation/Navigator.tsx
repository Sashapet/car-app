import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SummaryScreen } from '@screen/SummaryScreen';
import { DetailsScreen } from '@screen/DetailsScreen';
import { OffersScreen } from '@screen/OffersScreen';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLOR_TRANSPARENT, COLOR_WHITE } from '@color';
import { Title } from '@component/text/Title';

import { screen } from './enum/screen';
import { StackParamList } from './type/types';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigator = () => {
  const insets = useSafeAreaInsets();
  const [loading] = useState(false);

  return (
    <>
      <View style={[styles.rectangle, { paddingTop: insets.top }]} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <Title>Ieškome geriausių draudimo pasiūlymų</Title>
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.transparent,
              headerTitleAlign: 'center',
              headerStyle: styles.transparent,
              headerShadowVisible: false,
              headerTitleStyle: styles.title,
            }}
            initialRouteName={screen.SUMMARY}>
            <Stack.Screen
              options={{ headerTitle: 'Draudimas' }}
              name={screen.DETAILS}
              component={DetailsScreen}
            />
            <Stack.Screen
              options={{ headerTitle: 'Draudimo pasiūlymai' }}
              name={screen.OFFERS}
              component={OffersScreen}
            />
            <Stack.Screen
              options={{ headerTitle: 'Užsakymo patvirtinimas' }}
              name={screen.SUMMARY}
              component={SummaryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '93%',
  },
  rectangle: {
    backgroundColor: COLOR_TRANSPARENT,
    height: 20,
  },
  title: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

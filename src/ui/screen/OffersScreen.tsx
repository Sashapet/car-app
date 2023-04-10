import { Text, View } from 'react-native';
import React from 'react';
import { OfferCard } from '@component/offer/OfferCard';

export const OffersScreen: React.FC = () => (
  <View>
    <Text>OffersScreen</Text>
    <OfferCard name={''} />
  </View>
);

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { OfferCard } from '@component/offer/OfferCard';
import { IOffer } from '@interface/offerType';
import { periodType } from '@enums/periodType';
import { NavigationContainer } from '@react-navigation/native';

test('OfferCard', async () => {
  const startDate = new Date().toISOString();

  const mockOffer: IOffer = {
    insurer: {
      id: 'lietuvos-draufimas',
      name: 'Lietuvos Draudimas',
    },
    riskProfile: 'mock',
    price: {
      amount: 200.3312,
      currency: 'EUR',
    },
  };

  render(
    <NavigationContainer>
      <OfferCard
        period={periodType.LONG}
        offer={mockOffer}
        startDate={startDate}
      />
    </NavigationContainer>,
  );

  expect(screen.toJSON()).toMatchSnapshot();
});

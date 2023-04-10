import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { OfferCard } from '@component/offer/OfferCard';
import { Title } from '@component/text/Title';
import { Subtitle } from '@component/text/Subtitle';

export const OffersScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.offersContainer}>
    <View style={styles.upperSection}>
      <View style={styles.titleContainer}>
        <Title>Privalamojo draudimo pasiūlymai</Title>
      </View>
      <Subtitle>
        Išsirinkite geriausiai jūsų poreikius atitinkantį draudimo pasiūlymą
      </Subtitle>
    </View>
    <ScrollView contentContainerStyle={styles.cardContainer} horizontal>
      <OfferCard name={'compensa'} cost={'13,2'} />
      <OfferCard name={'draudimas'} cost={'12,91'} />
      <OfferCard name={'ergo'} cost={'15,78'} />
    </ScrollView>
  </ScrollView>
);

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 32,
    paddingLeft: '3.5%',
  },
  offersContainer: {
    paddingBottom: 40,
  },
  titleContainer: {
    paddingVertical: 8,
  },
  upperSection: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '93%',
  },
});

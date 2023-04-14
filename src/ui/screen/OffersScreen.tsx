import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { OfferCard } from '@component/offer/OfferCard';
import { Title } from '@component/text/Title';
import { Subtitle } from '@component/text/Subtitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { screen } from '@enums/screen';
import { GradientTemplate } from '@component/container/GradientTemplate';

import { StackRouteProp } from '../../navigation/type/types';
import { useFetch } from '../../hooks/useFetch';

export const OffersScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<StackRouteProp<screen.OFFERS>>();
  const { data, loading, error } = useFetch(params);

  useEffect(() => {
    if (error) goBack();
  }, [error]);

  return (
    <GradientTemplate>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Title>Ieškome geriausių draudimo pasiūlymų</Title>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.offersContainer}>
          <View style={styles.upperSection}>
            <View style={styles.titleContainer}>
              <Title>Privalamojo draudimo pasiūlymai</Title>
            </View>
            <Subtitle>
              Išsirinkite geriausiai jūsų poreikius atitinkantį draudimo
              pasiūlymą
            </Subtitle>
          </View>
          <ScrollView contentContainerStyle={styles.cardContainer} horizontal>
            {data?.map((offer, index) => (
              <OfferCard
                key={index}
                offer={offer}
                startDate={params.startDate}
                period={params.timePeriod}
              />
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </GradientTemplate>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 32,
    paddingLeft: '3.5%',
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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

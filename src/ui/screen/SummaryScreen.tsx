import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR_LIGHT_BLUE, COLOR_SECONDARY, COLOR_WHITE } from '@color';
import { Subtitle } from '@component/text/Subtitle';
import { Cost } from '@component/text/Cost';
import { GradientTemplate } from '@component/container/GradientTemplate';
import { useRoute } from '@react-navigation/native';
import { screen } from '@enums/screen';

import { StackRouteProp } from '../../navigation/type/types';

export const SummaryScreen: React.FC = () => {
  const route = useRoute<StackRouteProp<screen.SUMMARY>>();
  const { cost, name, endDate, startDate } = route.params;

  const formatStartDate = startDate.slice(0, 10).replace(/-/g, ' ');
  const formatEndDate = endDate.slice(0, 10).replace(/-/g, ' ');

  return (
    <GradientTemplate>
      <View style={styles.summaryContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>Privalomas draudimas</Text>
          </View>
          <View style={styles.sectionLine} />
          <View style={styles.row}>
            <Subtitle color="grey">Draudimo bendrove</Subtitle>
            <Subtitle color="secondary">{name}, AB</Subtitle>
          </View>
          <View style={styles.row}>
            <Subtitle color="grey">Draudimo laikas</Subtitle>
            <Subtitle color="secondary">
              {formatStartDate} - {formatEndDate}
            </Subtitle>
          </View>
          <View style={styles.row}>
            <Subtitle color="grey">Naudojimo paskirtis</Subtitle>
            <Subtitle color="secondary">Standartinė rizika</Subtitle>
          </View>
          <View style={styles.sectionLine} />
          <View style={styles.row}>
            <Subtitle color="grey">Draudimo įmoka</Subtitle>
            <Cost>{cost} €</Cost>
          </View>
        </View>
      </View>
    </GradientTemplate>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    marginTop: 24,
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 24,
    width: '100%',
  },
  row: {
    alignItems: 'flex-start',
    paddingBottom: 16,
  },
  sectionLine: {
    backgroundColor: COLOR_LIGHT_BLUE,
    height: 1,
    marginBottom: 16,
  },
  summaryContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: '93%',
  },
  title: {
    color: COLOR_SECONDARY,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});

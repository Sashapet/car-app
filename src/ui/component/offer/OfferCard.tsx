import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  COLOR_LIGHT_BLUE,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '@color';
import { InfoIcon } from '@component/icon/InfoIcon';
import { CompleteIcon } from '@component/icon/CompleteIcon';
import { DefaultBtn } from '@component/button/DefaultBtn';

interface IOfferCard {
  name: string;
}

export const OfferCard: React.FC<IOfferCard> = () => (
  <View style={styles.offerContainer}>
    <View style={styles.upperSection}>
      <Image source={require('../../../../assets/images/ergo.png')} />
    </View>

    <View style={styles.sectionLine}>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>13,42 $</Text>
        <View style={styles.infoContainer}>
          <InfoIcon />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.completeContainer}>
          <CompleteIcon />
        </View>
        <Text style={styles.informationText}>
          Transportavimas sumaišius degalus
        </Text>
      </View>
      <DefaultBtn onPress={() => console.log('Pasirinkti')}>
        Pasirinkti
      </DefaultBtn>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bottomSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 8,
  },
  completeContainer: {
    alignItems: 'center',
    backgroundColor: COLOR_SECONDARY,
    borderRadius: 20,
    height: 28,
    justifyContent: 'center',
    marginRight: 16,
    width: 28,
  },
  cost: {
    color: COLOR_PRIMARY,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: COLOR_LIGHT_BLUE,
    borderRadius: 20,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  informationText: {
    color: COLOR_SECONDARY,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    width: 164,
  },
  offerContainer: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 16,
    height: 320,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: 240,
  },
  sectionLine: {
    borderTopColor: COLOR_LIGHT_BLUE,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  upperSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

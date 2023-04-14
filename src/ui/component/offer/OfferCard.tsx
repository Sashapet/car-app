import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR_LIGHT_BLUE, COLOR_SECONDARY, COLOR_WHITE } from '@color';
import { InfoIcon } from '@component/icon/InfoIcon';
import { CompleteIcon } from '@component/icon/CompleteIcon';
import { DefaultBtn } from '@component/button/DefaultBtn';
import { Cost } from '@component/text/Cost';
import { IOffer } from '@interface/offerType';
import { useNavigation } from '@react-navigation/native';
import { screen } from '@enums/screen';
import { periodType } from '@enums/periodType';

import { StackNavProp } from '../../../navigation/type/types';

interface IOfferCard {
  offer: IOffer;
  startDate: string;
  period: periodType;
}

export const OfferCard: React.FC<IOfferCard> = ({
  offer,
  startDate,
  period,
}) => {
  const { navigate } = useNavigation<StackNavProp<screen.OFFERS>>();
  const { id, name } = offer.insurer;
  const { amount } = offer.price;

  const chooseImage = () => {
    switch (id) {
      case 'lietuvos-draudimas':
        return (
          <Image source={require(`../../../../assets/images/draudimas.png`)} />
        );
      case 'compensa':
        return (
          <Image source={require(`../../../../assets/images/compensa.png`)} />
        );
      case 'ergo':
        return <Image source={require(`../../../../assets/images/ergo.png`)} />;
      default:
        return null;
    }
  };

  const choosePerdiod = () => {
    switch (period) {
      case periodType.LONG:
        return 6;
      case periodType.MEDIUM:
        return 3;
      case periodType.SHORT:
        return 1;
      default:
        return 0;
    }
  };

  const onNavigateToSummary = () => {
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + choosePerdiod());

    navigate(screen.SUMMARY, {
      name,
      cost: amount,
      startDate,
      endDate: endDate.toISOString(),
    });
  };

  return (
    <View style={styles.offerContainer}>
      <View style={styles.upperSection}>{chooseImage()}</View>
      <View style={styles.sectionLine}>
        <View style={styles.costContainer}>
          <Cost>{amount} €</Cost>
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
        <DefaultBtn onPress={onNavigateToSummary}>Pasirinkti</DefaultBtn>
      </View>
    </View>
  );
};

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
    marginRight: 14,
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

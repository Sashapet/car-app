import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR_TRANSPARENT, COLOR_WHITE } from '@color';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  getDefaultHeaderHeight,
  HeaderBackButton,
} from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

interface IHeader {
  title: string;
  isBackVisible?: boolean;
}

export const Header: React.FC<IHeader> = ({ title, isBackVisible }) => {
  const { goBack } = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <View
      style={[
        styles.headerContainer,
        {
          height: headerHeight,
        },
      ]}>
      <View style={[styles.rectangle, { paddingBottom: insets.top }]} />
      <View style={styles.row}>
        <View style={styles.backButtonContainer}>
          {isBackVisible && (
            <HeaderBackButton onPress={goBack} tintColor={COLOR_WHITE} />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.empty} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
  },
  rectangle: {
    backgroundColor: COLOR_TRANSPARENT,
    height: 20,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

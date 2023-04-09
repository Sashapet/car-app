/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '@color';
import { periodType } from '@enums/periodType';

interface IRoundBtn {
  name: periodType;
  onPress: (period: periodType) => void;
  currentValue: periodType;
}

export const RoundBtn: React.FC<IRoundBtn> = ({
  onPress,
  name,
  currentValue,
}) => {
  const handlePress = () => onPress(name);

  const btnNames = {
    short: '1 mėnuo',
    medium: '3 mėnesiai',
    long: '6 mėnesiai',
  };

  return (
    <TouchableOpacity
      style={[
        styles.btnStyle,
        name === currentValue && styles.activeBtn,
        styles[name],
      ]}
      onPress={handlePress}>
      <Text
        style={[styles.btnText, name === currentValue && styles.activeText]}>
        {btnNames[name]}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeBtn: {
    backgroundColor: COLOR_SECONDARY,
    color: COLOR_WHITE,
  },
  activeText: {
    color: COLOR_WHITE,
  },
  btnStyle: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: 24,
    height: 32,
    justifyContent: 'center',
    marginLeft: 8,
  },
  btnText: {
    color: COLOR_PRIMARY,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  long: {
    width: 123,
  },
  medium: {
    width: 121,
  },
  short: {
    width: 100,
  },
});

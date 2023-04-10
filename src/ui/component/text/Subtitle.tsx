/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLOR_GREY, COLOR_SECONDARY, COLOR_WHITE } from '@color';

interface ISubtitle {
  children: React.ReactNode;
  color?: 'white' | 'grey' | 'secondary';
}

export const Subtitle: React.FC<ISubtitle> = ({
  children,
  color = 'white',
}) => <Text style={[styles.subtitleStyle, styles[color]]}>{children}</Text>;

const styles = StyleSheet.create({
  grey: {
    color: COLOR_GREY,
  },
  secondary: {
    color: COLOR_SECONDARY,
  },
  subtitleStyle: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  white: {
    color: COLOR_WHITE,
  },
});

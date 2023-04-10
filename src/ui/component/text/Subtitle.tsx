import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLOR_WHITE } from '@color';

export const Subtitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Text style={styles.subtitleStyle}>{children}</Text>;

const styles = StyleSheet.create({
  subtitleStyle: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

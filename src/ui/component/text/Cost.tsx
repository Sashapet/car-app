import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLOR_PRIMARY } from '@color';

export const Cost: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text style={styles.textStyle}>{children}</Text>
);

const styles = StyleSheet.create({
  textStyle: {
    color: COLOR_PRIMARY,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});

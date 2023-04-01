import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLOR_WHITE } from '@color';

export const Title: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Text style={styles.titleStyle}>{children}</Text>;

const styles = StyleSheet.create({
  titleStyle: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 32,
  },
});

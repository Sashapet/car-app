import { COLOR_OCEAN, COLOR_PRIMARY } from '@color';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const NavigationTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <LinearGradient
    start={{ x: 187.5, y: 0 }}
    end={{ x: 187.5, y: 667 }}
    colors={[COLOR_PRIMARY, COLOR_OCEAN]}
    style={styles.linearGradient}>
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

import { COLOR_OCEAN, COLOR_PRIMARY } from '@color';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { getDefaultHeaderHeight } from '@react-navigation/elements';

export const GradientTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <>
      <LinearGradient
        start={{ x: 187.5, y: 0 }}
        end={{ x: 187.5, y: 667 }}
        colors={[COLOR_PRIMARY, COLOR_OCEAN]}
        style={[styles.linearGradient, { paddingTop: headerHeight }]}>
        {children}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

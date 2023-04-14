import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '@color';
import { btnType } from '@enums/btnType';

interface IRoundBtn {
  children: React.ReactNode;
  onPress: () => void;
  type?: btnType;
}

export const DefaultBtn: React.FC<IRoundBtn> = ({
  onPress,
  children,
  type = btnType.PRIMARY,
}) => {
  const handlePress = () => onPress();

  const bgStyle =
    type === btnType.PRIMARY ? styles.primaryBg : styles.secondaryBg;

  return (
    <TouchableOpacity style={[styles.btnStyle, bgStyle]} onPress={handlePress}>
      <Text style={[styles.btnText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 16,
    width: '100%',
  },
  btnText: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  primaryBg: {
    backgroundColor: COLOR_PRIMARY,
    height: 48,
  },
  secondaryBg: {
    backgroundColor: COLOR_SECONDARY,
    height: 56,
  },
});

import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {
  COLOR_DANGER,
  COLOR_GREY,
  COLOR_LIGHT_GREY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '@color';
import { useFormikContext } from 'formik';

interface DetailsValues {
  regPlate: string;
  date: Date;
  personalCode: string;
}

interface IInput {
  type: 'regPlate' | 'personalCode';
}

export const Input: React.FC<IInput> = ({ type }) => {
  const { handleChange, values } = useFormikContext<DetailsValues>();
  const value = values[type];
  const label = type === 'regPlate' ? 'Valstybinis numeris' : 'Asmenis kodas';
  const labelStyle = [styles.label, type === 'regPlate' && styles.red];
  const inputStyle = [styles.input, type === 'regPlate' && styles.red];
  const placeholder = type === 'regPlate' ? 'ABC123' : '30000000000';
  const keyboardType = type === 'regPlate' ? 'default' : 'numeric';

  return (
    <View style={styles.inputContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        maxLength={11}
        placeholder={placeholder}
        placeholderTextColor={COLOR_LIGHT_GREY}
        onChangeText={handleChange(type)}
        style={inputStyle}
        value={value.toUpperCase()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: COLOR_SECONDARY,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    width: '100%',
  },
  inputContainer: {
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 4,
    padding: 16,
    width: '100%',
    zIndex: 10,
  },
  label: {
    color: COLOR_GREY,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  red: {
    color: COLOR_DANGER,
  },
});

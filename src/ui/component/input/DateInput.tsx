import { COLOR_GREY, COLOR_SECONDARY, COLOR_WHITE } from '@color';
import { CalendarIcon } from '@component/icon/CalendarIcon';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DetailsValues {
  regPlate: string;
  date: Date;
  personalCode: string;
}

export const DateInput: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { setFieldValue, values } = useFormikContext<DetailsValues>();
  const { date } = values;

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(true)}>
      <View pointerEvents="box-only" style={styles.inputContainer}>
        <Text style={styles.label}>Draudimo įsigaliojimo laikas</Text>
        <View style={styles.row}>
          <TextInput
            editable={false}
            style={styles.input}
            value={date.toISOString().slice(0, 10).replace(/-/g, ' ')}
          />
          <CalendarIcon />
        </View>
        <DatePicker
          modal
          date={date}
          mode="date"
          open={open}
          minimumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setFieldValue('date', date);
          }}
          onCancel={() => setOpen(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    color: COLOR_SECONDARY,
    flex: 1,
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
    marginTop: 32,
    padding: 16,
    width: '100%',
    zIndex: 10,
  },
  label: {
    color: COLOR_GREY,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

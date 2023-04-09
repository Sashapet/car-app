import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { DateInput } from '@component/input/DateInput';
import { Input } from '@component/input/Input';
import { schema } from '@util/yup';
import { Subtitle } from '@component/text/Subtitle';
import { RoundBtn } from '@component/button/RoundBtn';
import { periodType } from '@enums/periodType';
import { DefaultBtn } from '@component/button/DefaultBtn';
import { btnType } from '@enums/btnType';

export const DetailsForm: React.FC = () => (
  <Formik
    initialValues={{
      carNumber: '',
      date: new Date(),
      personalCode: '',
      timePeriod: periodType.LONG,
    }}
    validationSchema={schema}
    onSubmit={values => console.log(values)}>
    {({ handleSubmit, errors, setFieldValue, values }) => {
      const periodButtons = [
        periodType.SHORT,
        periodType.MEDIUM,
        periodType.LONG,
      ];

      console.log(errors);

      const onTimePeriod = (period: periodType) =>
        setFieldValue('timePeriod', period, true);

      return (
        <>
          <DateInput />
          <Input type="carNumber" />
          <Input type="personalCode" />
          <View style={styles.subtitleStyle}>
            <Subtitle>Draudimo trukmė</Subtitle>
          </View>
          <ScrollView horizontal>
            <View style={styles.btnContainer}>
              {periodButtons.map((period, index) => (
                <RoundBtn
                  key={index}
                  name={period}
                  currentValue={values.timePeriod}
                  onPress={onTimePeriod}
                />
              ))}
            </View>
          </ScrollView>
          <DefaultBtn type={btnType.SECONDARY} onPress={handleSubmit}>
            Toliau
          </DefaultBtn>
        </>
      );
    }}
  </Formik>
);

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    paddingBottom: 51,
    width: 363,
  },
  subtitleStyle: {
    alignSelf: 'flex-start',
    paddingBottom: 16,
    paddingTop: 24,
  },
});

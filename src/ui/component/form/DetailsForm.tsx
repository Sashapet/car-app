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
import { useNavigation } from '@react-navigation/native';
import { screen } from '@enums/screen';

import { StackNavProp } from '../../../navigation/type/types';

export const DetailsForm: React.FC = () => {
  const { navigate } = useNavigation<StackNavProp<screen.OFFERS>>();

  return (
    <Formik
      initialValues={{
        regPlate: '',
        startDate: new Date().toISOString(),
        personalCode: '',
        timePeriod: periodType.LONG,
      }}
      validationSchema={schema}
      onSubmit={values => navigate(screen.OFFERS, values)}>
      {({ handleSubmit, setFieldValue, values }) => {
        const periodButtons = [
          periodType.SHORT,
          periodType.MEDIUM,
          periodType.LONG,
        ];

        const onTimePeriod = (period: periodType) =>
          setFieldValue('timePeriod', period, true);

        return (
          <>
            <DateInput />
            <Input type="regPlate" />
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
};

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

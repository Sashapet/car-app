import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { Title } from '@component/text/Title';
import { Subtitle } from '@component/text/Subtitle';
import { DetailsForm } from '@component/form/DetailsForm';

export const DetailsScreen: React.FC = () => (
  <KeyboardAvoidingView
    style={styles.flex1}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.flex1} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Title>Automobilio Draudimas</Title>
          </View>
          <Subtitle>
            Duis sodales urna aliquam, aliquam arcu vehicula, pharetra felis
          </Subtitle>
          <DetailsForm />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '93%',
  },
  flex1: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 8,
  },
});

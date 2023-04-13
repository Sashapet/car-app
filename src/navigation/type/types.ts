import { formValues } from '@interface/formValues';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { screen } from '../../types/enums/screen';

export type StackParamList = {
  [screen.DETAILS]: undefined;
  [screen.OFFERS]: formValues;
  [screen.SUMMARY]: undefined;
  [screen.LOADING]: undefined;
};

export type StackNavProp<T extends keyof StackParamList> =
  NativeStackNavigationProp<StackParamList, T>;

export type StackRouteProp<T extends keyof StackParamList> = RouteProp<
  StackParamList,
  T
>;

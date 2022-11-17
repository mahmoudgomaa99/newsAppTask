import {Dimensions, Platform, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: Platform.OS === 'ios' ? '6%' : 0,
  },
});

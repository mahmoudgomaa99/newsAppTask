import {Dimensions, Platform, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? '12%' : 70,
    backgroundColor: COLORS.primary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  iconWrapper: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});

import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 10,
    justifyContent: 'flex-end',
  },
  contentWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: '800',
  },
});

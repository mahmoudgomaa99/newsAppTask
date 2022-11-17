import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 3,
  },
  desc: {
    color: COLORS.white,
    fontSize: 11,
  },
  tapToReadTxt: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  bottomBodyWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
  },
  author: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  date: {
    color: COLORS.white,
    fontSize: 12,
  },
});

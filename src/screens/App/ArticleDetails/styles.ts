import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 3,
  },
  desc: {
    color: COLORS.black,
    fontSize: 15,
    marginTop: 10,
  },
  author: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
  },
  authorWrapper: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginTop: 5,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  dateWrapper: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginTop: 5,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  authorValue: {
    color: COLORS.white,
    fontSize: 16,
    maxWidth: '100%',
  },
  dateValue: {
    color: COLORS.white,
    fontSize: 16,
    maxWidth: '100%',
  },
});

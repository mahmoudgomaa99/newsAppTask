import {Dimensions, Platform, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:COLORS.white
  },
  logoText: {
    fontSize: Dimensions.get('window').width * 0.1,
    fontFamily: Fonts.fragmentItalic,
  },
});

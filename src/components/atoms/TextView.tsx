import {Platform, StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import Fonts from 'values/fonts';

type TTextViewProps = {
  title: string;
};

const TextView = ({title, ...props}: TTextViewProps & TextProps) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {title}
    </Text>
  );
};

export default TextView;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.fragment,
  },
});

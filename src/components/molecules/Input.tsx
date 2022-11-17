import {Dimensions, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {Input, InputProps} from 'react-native-elements';
import COLORS from 'values/colors';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

type TInput = {
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title?: string;
  values: any;
  containerStyling?: ViewStyle;
  titleStyling?: any;
  eye?: boolean;
};

const InputView = ({
  loading,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  title,
  placeholder,
  containerStyling,
  titleStyling,
  eye,
  ...props
}: InputProps & TInput) => {
  return (
    <View style={[containerStyling]}>
      <Text style={titleStyling}>{title}</Text>
      <Input
        {...props}
        keyboardType="web-search"
        placeholder={placeholder}
        autoCompleteType={'off'}
        disabled={loading ? true : false}
        placeholderTextColor="#888888"
        value={values[name]}
        errorStyle={{
          color: COLORS.errorRed,
        }}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: '#000',
          fontSize: 14,
          opacity: 0.7,
        }}
        inputContainerStyle={{
          ...styles.textInputStyle,
          borderColor:
            errors[name] && touched[name] ? COLORS.errorRed : COLORS.primary,
        }}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    height: 40,
    paddingLeft: w * 0.03,
    lineHeight: 24,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    fontSize: 12,
    color: COLORS.black,
  },
});

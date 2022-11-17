import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';

type TType = 'primary';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label?: string;
};

const Button = ({
  isLoading,
  type,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={
          {
            ...styles[type],
            backgroundColor: props.disabled
              ? '#D1D1D1'
              : styles[type].backgroundColor,
          } || {...styles.primary}
        }>
        {isLoading ? (
          <ActivityIndicator color={COLORS.black} />
        ) : !props.children ? (
          <Text
            style={
              {
                ...styles[`txt_${type}`],
                color: props.disabled ? '#A1A1A1' : styles[`txt_${type}`].color,
              } || styles.txt_primary
            }>
            {label}
          </Text>
        ) : (
          props.children
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    margin: 8,
    padding: 10,
    borderRadius: 10,
  },
  txt_primary: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

import React from 'react';
import {View, Text} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import COLORS from 'values/colors';

export const toastConfig: any = {
  success: (props: any) => (
    <BaseToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 15}}
      text2Style={{
        fontSize: 13,
        fontWeight: '400',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: COLORS.red, backgroundColor: COLORS.white}}
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 13,
      }}
    />
  ),

  tomatoToast: ({text1, props}: any) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

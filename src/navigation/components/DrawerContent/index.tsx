import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from 'components/molecules/Button';
import {Switch} from 'react-native-elements';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {styles} from './styles';
import COLORS from 'values/colors';

const DrawerContent = ({...props}: DrawerContentComponentProps) => {
  const [language, setLanguage] = useState<'Arabic' | 'English'>('Arabic');
  return (
    <View style={{marginTop: Platform.OS === 'android' ? 30 : 0}}>
      <Button
        type="primary"
        label="Home"
        onPress={() => props.navigation.navigate('app')}
      />
      <Button
        type="primary"
        label="setting"
        onPress={() => props.navigation.navigate('setting')}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.language}>{language}</Text>
        <Switch
          value={language === 'Arabic'}
          onValueChange={() =>
            setLanguage(prev => (prev === 'Arabic' ? 'English' : 'Arabic'))
          }
          trackColor={{true: COLORS.primary}}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

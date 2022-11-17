import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => goBack()}>
          <Svg name="default" size={13} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

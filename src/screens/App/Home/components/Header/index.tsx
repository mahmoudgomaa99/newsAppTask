import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import SearchInput from './components/SearchInput';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Svg name="menu" size={20} />
        </TouchableOpacity>
      </View>
      <SearchInput />
    </View>
  );
};

export default Header;

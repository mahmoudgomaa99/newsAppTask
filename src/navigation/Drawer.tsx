import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import AppStack from './AppStack';
import Setting from 'src/screens/App/Setting';
import Button from 'components/molecules/Button';
import {Switch} from 'react-native-elements';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerContent {...props} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="app"
        component={AppStack}
        options={{headerShown: false, title: 'Home'}}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{headerShown: false, title: 'Setting'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

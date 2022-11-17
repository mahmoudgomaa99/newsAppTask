import React, {useCallback, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AppStack from './AppStack';
import {selectIsSplashDone} from 'redux/Splash';
import SplashScreen from 'src/screens/Splash';
import Article, {selectQuerring} from 'redux/article';
import {useAppDispatch} from 'redux/store';
import DrawerNav from './Drawer';

const NavigationHandler = () => {
  const isSplashDone = useSelector(selectIsSplashDone);
  const quering = useSelector(selectQuerring);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      Article.thunks.doGetArticles({
        query: quering.query,
        page: quering.currentPage,
      }),
    );
  }, [quering.currentPage, quering.query]);
  const renderSwitch = useCallback(() => {
    if (!isSplashDone) return <SplashScreen />;
    return <DrawerNav />;
  }, [isSplashDone]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NeedsInternetConnection>{renderSwitch()}</NeedsInternetConnection>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationHandler;

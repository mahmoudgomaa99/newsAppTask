import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from 'redux/store';
import Splash from 'redux/Splash';
import Lottie from 'lottie-react-native';
import {images} from 'src/assets/images';
import {styles} from './styles';
import TextView from 'atoms/TextView';
import {unwrapResult} from '@reduxjs/toolkit';
import Article from 'redux/article';

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Article.thunks.doGetArticles({}))
      .then(unwrapResult)
      .then(() => {
        setTimeout(() => dispatch(Splash.setSplashDone()), 2000);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={images.splash.animation}
        style={{width: '80%'}}
        autoPlay
        loop
      />
      <TextView title="News" style={styles.logoText} />
    </SafeAreaView>
  );
};

export default SplashScreen;

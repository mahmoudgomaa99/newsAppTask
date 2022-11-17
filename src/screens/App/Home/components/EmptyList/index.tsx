import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import {useLoadingSelector} from 'redux/selectors';
import Article from 'redux/article';

const EmptyList = () => {
  const isLoading = useLoadingSelector(Article.thunks.doGetArticles);
  return (
    <View
      style={{
        height: Dimensions.get('window').height * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator size={25} />
      ) : (
        <>
          <Svg name="empty" size={Dimensions.get('window').width * 0.8} />
          <TextView
            title="No Articles are found"
            style={{marginTop: 15, fontSize: 17}}
          />
        </>
      )}
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});

import {FlatList, Platform, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectArticles, selectQuerring} from 'redux/article';
import Article from './components/Article';
import Header from './components/Header';
import {useAppDispatch} from 'redux/store';
import article from 'redux/article';
import EmptyList from './components/EmptyList';
import {useLoadingSelector} from 'redux/selectors';

const Home = () => {
  const articles = useSelector(selectArticles);
  const dispatch = useAppDispatch();
  const quering = useSelector(selectQuerring);
  const isLoading = useLoadingSelector(article.thunks.doGetArticles);
  return (
    <View>
      <Header />
      <View style={{height: Platform.OS === 'ios' ? '86.5%' : '92%'}}>
        <FlatList
          data={articles}
          renderItem={({item}) => <Article item={item} />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={() => dispatch(article.addPage())}
          ListEmptyComponent={<EmptyList />}
          onRefresh={() => {
            dispatch(article.setRefresh());
            dispatch(
              article.thunks.doGetArticles({
                query: quering.query,
                page: quering.currentPage,
              }),
            );
          }}
          refreshing={isLoading}
        />
      </View>
    </View>
  );
};

export default Home;

import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import * as thunks from './thunks';
import {RootState} from '../store';
import Toast from 'react-native-toast-message';
import {TArticle} from './model';
import {Platform} from 'react-native';

type TInitialValues = {
  articles: TArticle[];
  currentPage: number;
  query: string;
  refresh: boolean;
};

const initialValues: TInitialValues = {
  articles: [],
  currentPage: 1,
  query: '',
  refresh: false,
};

const slice = createSlice({
  name: 'article',
  initialState: initialValues,
  reducers: {
    addPage: state => {
      state.currentPage = state.currentPage + 1;
    },
    setQuery: (state, action) => {
      if (action.payload) {
        state.articles = [];
        state.currentPage = 1;
        state.query = action.payload;
      }
    },
    setRefresh: state => {
      state.articles = [];
      state.currentPage = 1;
      state.refresh = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.doGetArticles.fulfilled, (state, action) => {
      state.articles = [...state.articles, ...action.payload.articles];
      state.refresh = false;
    });
    builder.addCase(thunks.doGetArticles.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const Article = {
  thunks,
  slice,
  addPage: slice.actions.addPage,
  setQuery: slice.actions.setQuery,
  setRefresh: slice.actions.setRefresh,
};

export const selectArticles = (state: RootState) => state.article.articles;
export const selectQuerring = (state: RootState) => {
  return {
    query: state.article.query,
    currentPage: state.article.currentPage,
    isRefresh: state.article.refresh,
  };
};
export default Article;

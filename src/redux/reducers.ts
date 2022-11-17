import {combineReducers} from '@reduxjs/toolkit';
import Splash from './Splash';
import Article from './article';
import loadingSlice from './_loading';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  [Splash.slice.name]: Splash.slice.reducer,
  [Article.slice.name]: Article.slice.reducer,
});

export default combinedReducer;

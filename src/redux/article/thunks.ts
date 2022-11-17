import {createAsyncThunk} from '@reduxjs/toolkit';
import {ArticleApi} from './API';
import {TQuerieing} from './model';

export const doGetArticles = createAsyncThunk<any, TQuerieing, any>(
  'articles/get',
  async (data: TQuerieing, thunkAPI) => {
    try {
      const response = await ArticleApi.getArticle(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

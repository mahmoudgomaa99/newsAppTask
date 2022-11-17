import axios from 'axios';
import {TQuerieing} from './model';

const getArticle = ({query, page}: TQuerieing) =>
  axios.get(
    `https://newsapi.org/v2/everything?from=2022-11-14&apiKey=4200b68af8a24eba8595005d201a4d05&sources=techcrunch&page=${
      page || 1
    }&pageSize=10&q=${query || ''}`,
  );

export const ArticleApi = {
  getArticle,
};

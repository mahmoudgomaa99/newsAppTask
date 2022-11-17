import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {TStore} from './store';
import assign from 'lodash/assign';

const initAxios = (store: TStore) => {
  const injectAuthHeaders = (config: AxiosRequestConfig) => {
    //injecting tokens is done here
    //token would be stored in the redux store and have a customized reducer
    return config;
  };

  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  //setting baseUrl is done here
  // axios.defaults.baseURL = env.BASE_URL;
  //
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;

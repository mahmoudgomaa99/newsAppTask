import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {
  splashDone: false,
};

const slice = createSlice({
  name: 'splash',
  initialState,
  reducers: {
    setSplashDone: state => {
      state.splashDone = true;
    },
  },
  extraReducers: builder => {},
});

export const selectIsSplashDone = (state: RootState) => state.splash.splashDone;

const Splash = {
  slice,
  setSplashDone: slice.actions.setSplashDone,
};

export default Splash;

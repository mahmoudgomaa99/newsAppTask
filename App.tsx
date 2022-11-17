import React from 'react';
import {StatusBar} from 'react-native';
import NavigationHandler from 'src/navigation/';
import COLORS from 'values/colors';
import {store} from 'src/redux/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'src/config/Toast';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar animated={true} barStyle="light-content" />
        <NavigationHandler />
        <Toast config={toastConfig} topOffset={70} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

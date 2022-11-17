import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'src/screens/App/Home';
import ArticleDetails from 'src/screens/App/ArticleDetails';

export type TAuthStack = {
  home: undefined;
  article_details: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="article_details"
        component={ArticleDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

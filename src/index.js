import React from 'react';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import store from '~/store';

const App = () => (
  <>
    <StatusBar backgroundColor="#feca57" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </>
);

export default App;

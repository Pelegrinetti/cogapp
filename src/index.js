import React from 'react';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import { store, persistor } from '~/store';

const App = () => (
  <>
    <StatusBar backgroundColor="#feca57" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </>
);

export default App;

import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import { createRealmPersistStorage } from '@bankify/redux-persist-realm';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: createRealmPersistStorage(),
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dbReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favoriteList']
  };

const rootReducer = combineReducers({ dbReducer: persistReducer(persistConfig, dbReducer) });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);
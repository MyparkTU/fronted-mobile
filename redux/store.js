import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dbReducer from './reducer';

const rootReducer = combineReducers({ dbReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
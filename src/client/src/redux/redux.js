import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import GameReducer from './reducers/Game';
import GeneralSocketInfoReducer from './reducers/GeneralSocketInfo';
import UserReducer from './reducers/User';

import SocketClient from './middleware/socketIO';

export const reducers = combineReducers({
  game: GameReducer,
  generalSocketInfo : GeneralSocketInfoReducer,
  user : UserReducer,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers,  applyMiddleware(SocketClient));//, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export const store = configureStore();

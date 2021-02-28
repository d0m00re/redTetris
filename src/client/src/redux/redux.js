import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

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
//                            );

export function configureStore(initialState = {}) {  

  const store = createStore(reducers, composeWithDevTools(applyMiddleware(SocketClient)));
                            return store;
};

export const store = configureStore();
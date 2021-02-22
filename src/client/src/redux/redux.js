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
export function configureStore(initialState = {}) {  
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); //process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

  const store = createStore(reducers,
                            composeWithDevTools(applyMiddleware(SocketClient)));//, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                            return store;
};

export const store = configureStore();

import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose
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
  const store = createStore(reducers,
                            compose(
                            applyMiddleware(SocketClient),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));//, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
                            return store;
};

export const store = configureStore();

import {
    combineReducers,
    createStore,
  } from 'redux';


import GameReducer from './reducers/Game';


  //-------------------------------
  // actions.js
  export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
  });
  
  export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
  });
  
  // reducers.js
  export const geod = (state = {}, action) => {
    switch (action.type) {
      case 'ACTIVATE_GEOD':
        return action.geod;
      case 'CLOSE_GEOD':
        return {};
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({
    geod,
    game : GameReducer
  });
  
  // store.js
  export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
  };
  
  export const store = configureStore();
  
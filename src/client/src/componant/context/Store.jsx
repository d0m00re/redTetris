import React, { createContext, useReducer } from "react";
import _ from "lodash" // Import the entire lodash library
const { findLineComplete, deleteAndMooveBottomLine} = require('../hook/checkLineComplete');

import {UPDATE_FINAL_MAP,
      UPDATE_TMP_MAP,
      UPDATE_TETRIMINOS_POS,
      TETRI_ROTATION,  
      UPDATE_USERNAME, 
      UPDATE_ROOM
} from './Constant';

const tetriBlue = [
  [
      [1,0,0],
      [1,1,1],
      [0,0,0],
  ],
  [
      [0,1,1],
      [0,1,0],
      [0,1,0],
  ],
  [
      [0,0,0],
      [1,1,1],
      [0,0,1],
  ],
  [
      [0,1,0],
      [0,1,0],
      [1,1,0],
  ],
]

const Reducer = (state, action) => {

  switch (action.type) {
    
    case UPDATE_FINAL_MAP:
      // check delete line
      return {
        ...state,
          currMap: action.payload,
          posTetriminos: {x : 5, y : -1}
      }
    case UPDATE_TMP_MAP:
      return {
        ...state,
        tmpMap: action.payload.tmpMap,
        posTetriminos: action.payload.pos,
      };
    case UPDATE_TETRIMINOS_POS:
      return {
        ...state,
        currPosTetriminos: { x: action.payload.x, y: action.payload.y },
      };
    case TETRI_ROTATION:
      console.log('rotation : ');
      console.log(action.payload);
      return {
        ...state,
        currRotation : action.payload
      }

      case UPDATE_USERNAME:
        //go perform axios request for saving user
        console.log('username: ');
        return {
          ...state,
          username : action.payload
        }

      case UPDATE_ROOM:
        console.log('udpate room : ' + action.payload);
        return {
          ...state,
          roomname : action.payload
        }

   
    default:
      console.log('fuck');
      console.log(UPDATE_USERNAME);
      return state;
  }
};

const initialState = {
  currentKey: "",
  username: "d0m",
  roomname: '',
  currRotation: 0,
  currTetriminos: { 
    color :'blue',
    tetri : tetriBlue
  },

  posTetriminos: { x: 5, y: -1 },
  currMap: Array(20)
    .fill()
    .map(() => Array(10).fill(0)),
  tmpMap: Array(20)
    .fill()
    .map(() => Array(10).fill(0)),
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;

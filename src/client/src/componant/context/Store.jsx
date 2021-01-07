import React, { createContext, useReducer } from "react";
import _ from "lodash" // Import the entire lodash library
const { findLineComplete, deleteAndMooveBottomLine} = require('../hook/checkLineComplete');

const UPDATE_FINAL_MAP = "UPDATE_FINAL_MAP";
const UPDATE_TMP_MAP = "UPDATE_TMP_MAP";
const UPDATE_TETRIMINOS_POS = "UPDATE_TETRIMINOS_POS";
const TETRI_ROTATION = 'TETRI_ROTATION';
const PLACE_TETRIMINOS = "PLACE_TETRIMINOS";
const GET_NEXT_TETRIMINOS = "GET_NEXT_TETRIMINOS";

const CHECK_LINE_COMPLETE = 'CHECK_LINE_COMPLETE';

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
      return {
        ...state,
          currMap: action.payload
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

   
    default:
      return state;
  }
};

const initialState = {
  currentKey: "",
  username: "d0m",
  currRotation: 0,
  currTetriminos: {
    color :'blue',
    tetri : tetriBlue
  },

  posTetriminos: { x: 5, y: 0 },
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

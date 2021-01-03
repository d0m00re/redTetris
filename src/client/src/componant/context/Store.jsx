import React, { createContext, useReducer } from "react";
import _ from "lodash" // Import the entire lodash library
const { findLineComplete, deleteAndMooveBottomLine} = require('../hook/checkLineComplete');

const UPDATE_KEY = "UPDATE_KEY";
const UPDATE_MAP_ADD_TETRIMINOS = "UPDATE_MAP_ADD_TETRIMINOS";
const UPDATE_TMP_MAP = "UPDATE_TMP_MAP";
const UPDATE_TETRIMINOS_POS = "UPDATE_TETRIMINOS_POS";

const PLACE_TETRIMINOS = "PLACE_TETRIMINOS";
const GET_NEXT_TETRIMINOS = "GET_NEXT_TETRIMINOS";

const CHECK_LINE_COMPLETE = 'CHECK_LINE_COMPLETE';

const Reducer = (state, action) => {
  /*console.log*/("staeeeee : ");
  /*console.log*/(state);
  switch (action.type) {
    case UPDATE_KEY:
      return {
        ...state,
        currentKey: action.payload,
      };
    case UPDATE_TMP_MAP:
      return {
        ...state,
        tmpMap: action.payload,
      };
    case UPDATE_TETRIMINOS_POS:
      /*console.log*/("updatetetriminos pos");
      /*console.log*/(action.payload);
      return {
        ...state,

        currPosTetriminos: { x: action.payload.x, y: action.payload.y },
      };

    //         copy tmpMap in FinalMap
    case PLACE_TETRIMINOS:
      let cpTmpMap = _.cloneDeep(state.tmpMap);
      return {
          ...state,
          currMap: cpTmpMap,
      };
    case GET_NEXT_TETRIMINOS:
        // ask next tetriminos
      return {
          ...state,
          currPosTetriminos: { x: 5, y: 0 },
      };

      case CHECK_LINE_COMPLETE:
        let newArr = _.cloneDeep(deleteAndMooveBottomLine(state.currMap));

        return{
          currMap: newArr,
          ...state
        }
    default:
      return state;
  }
};

const initialState = {
  currentKey: "",
  username: "d0m",
  currTetriminos: 1,
  currPosTetriminos: { x: 5, y: 0 },
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

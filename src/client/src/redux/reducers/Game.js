import _ from "lodash" // Import the entire lodash library
import {mergeTetriOnMap, deleteFullLine} from './../../logic/tetriLogic';

import {
  UPDATE_FINAL_MAP,
  UPDATE_TETRIMINOS_POS,
  TETRI_ROTATION,
  UPDATE_USERNAME,
  UPDATE_ROOM,

  SET_NB_LINE_BLOCK,
} from "../Constant/Constant";

import {END_TURN_PUT, ADD_TETRI, RESET_TETRI } from './../Constant/Tetri';

 
const initialState = {
  currentKey: "",
  username: "d0m",
  roomname: '',
  currRotation: 0,

  posTetriminos: { x: 5, y: -2 },
  currMap: Array(20).fill().map(() => Array(10).fill(0)),
  tetriList: [],
  nbLineBlock: 1, // blok line - multiplayer

  //--------------------------------------
  gameRunning: true, // false : game stop
  gameEnd: false,
};


const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FINAL_MAP:
      // check delete line
      return {
        ...state,
        currMap: action.payload,
        posTetriminos: { x: 5, y: -2 },
      };
    case UPDATE_TETRIMINOS_POS:
      return {
        ...state,
        posTetriminos: { x: action.payload.x, y: action.payload.y },
      };
    case TETRI_ROTATION:
      return {
        ...state,
        currRotation: action.payload,
      };

    case UPDATE_USERNAME:
      //go perform axios request for saving user
      return {
        ...state,
        username: action.payload,
      };

    case UPDATE_ROOM:
      return {
        ...state,
        roomname: action.payload,
      };

    case SET_NB_LINE_BLOCK:
      return {
        ...state,
        nbLineBlock: action.payload
      }

    case ADD_TETRI:      
      return {
        ...state,
        tetriList: state.tetriList.concat(action.payload)//[...state.tetriList, ...action.payload]
      }

    case RESET_TETRI: 
      return {
        ...state,
        tetriList: []
      }

      case END_TURN_PUT:
        console.log(' generate new map');
        let cpMap = _.cloneDeep(state.currMap);
        mergeTetriOnMap(cpMap, state.tetriList[0].shape[state.currRotation], state.posTetriminos);
        cpMap = deleteFullLine(cpMap, state.nbLineBlock);
        
        let newTetriList = [...state.tetriList];
        newTetriList.shift();

      return {
        ...state,
        currRotation : 0,
        tetriList : newTetriList,
        currMap: cpMap,
        posTetriminos: { x: 5, y: -1 },
      }

    default:
      return state;
  }
};

export default GameReducer;
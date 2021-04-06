import _ from "lodash" // Import the entire lodash library
import { mergeTetriOnMap, deleteFullLine } from './../../logic/tetriLogic';

import {
  GAME_RESET_CURRMAP,
  INCR_NB_LINE_BLOCK,
  SET_NB_LINE_BLOCK,
  UPDATE_FINAL_MAP,

  UPDATE_TETRIMINOS_POS,
  TETRI_ROTATION,
  UPDATE_USERNAME,
  UPDATE_ROOM,
  GAME_RESET,
  GAME_INIT_STATE,
  GAME_INCR_SCORE,

  END_TURN_PUT,
  ADD_TETRI,
  RESET_TETRI
} from "../Constant/Game";

export const initialState = {
  currentKey: '',
  username: '',
  roomname: '',
  currRotation: 0,

  posTetriminos: { x: 3, y: -2 },
  currMap: Array(20).fill().map(() => Array(10).fill(0)),
  tetriList: [],
  nbLineBlock: 0, // blok line - multiplayer
  score: 0,

  gameRunning: true, // false : game stop
  gameEnd: false,
};

let dictScore = {
  0: 0,
  1: 100,
  2: 300,
  3: 1200
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INCR_SCORE:
      let score = dictScore[action.payload] ? dictScore[action.payload] : 0;
      return {
        ...state,
        score: (state.score + score)
      }
    case GAME_INIT_STATE:
      return {
        ...initialState
      }
    case GAME_RESET:
      return {
        ...state,
        posTetriminos: { x: 3, y: -2 },
        currMap: Array(20).fill().map(() => Array(10).fill(0)),
        tetriList: [],
        nbLineBlock: 0,
        currRotation: 0,
        score: 0
      }
    case UPDATE_FINAL_MAP:
      return {
        ...state,
        currMap: action.payload,
        posTetriminos: { x: 3, y: -2 },
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

    case INCR_NB_LINE_BLOCK:

      let _nbLineBlock = state.nbLineBlock + action.payload;
      console.log('------> ' + state.nbLineBlock + ' : ' + action.payload + ' = ' + state.nbLineBlock + action.payload);
      return {
        ...state,
        nbLineBlock: _nbLineBlock
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

    case GAME_RESET_CURRMAP:
      return {
        ...state,
        currRotation: 0,
        posTetriminos: { x: 3, y: -2 },
        currMap: Array(20).fill().map(() => Array(10).fill(0)),
        tetriList: [],
        nbLineBlock: 0,
        score: 0
      }

    case END_TURN_PUT:
      let newTetriList = [...state.tetriList];
      newTetriList.shift();

      console.log(action.payload)
      return {
        ...state,
        currRotation: 0,
        tetriList: newTetriList,
        currMap: action.payload.newMap,
        posTetriminos: { x: 5, y: -1 },
      }
    default:
      return state;
  }
};

export default GameReducer;
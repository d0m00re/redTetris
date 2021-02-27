 import {ADD_TETRI, REMOVE_FIRST_TETRI, RESET_TETRI} from './../Constant/Tetri';

 const initState = {
     tetriList: [],
 }

 const TetriReducer = (state = initState, action) => {
     switch(action.type) {
         case ADD_TETRI: 
             return {
                 tetriList : [action.payload, ...state.tetriList]
             }
         case REMOVE_FIRST_TETRI:
            let tmp = [...state.tetriList];
            tmp.shift();
            return {
                tetriList : tmp
            }
        case RESET_TETRI:
            return {
                tetriList : []
            }
             default:
            return state
     }
 }

 export default TetriReducer; 
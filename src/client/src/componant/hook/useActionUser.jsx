import React,{useEffect, useContext} from 'react'
import useKeyPress from './useKeyPress';

import {Context} from './../context/Store';
const useActionUser = () => {
    const [state, dispatch] = useContext(Context);
    const [keyPress] = useKeyPress();
    
    useEffect(() => {
        console.log('key press : ' + keyPress);
    //    console.log(GameContext);
        console.log(state);
        
    switch(keyPress){
            case 'ArrowRight':
                dispatch({type : 'UPDATE_KEY', payload : 'right'});
            break;
            case 'ArrowLeft':
                dispatch({type : 'UPDATE_KEY', payload : 'left'});
            break;
            case 'ArrowUp':
                dispatch({type : 'UPDATE_KEY', payload : 'up'});
            break;
            case 'ArrowDown':
                dispatch({type : 'UPDATE_KEY', payload : 'down'});
            break;
            case 'Space':
                dispatch({type : 'UPDATE_KEY', payload : 'space'});
            break;
            case '':
                dispatch({type : 'UPDATE_KEY', payload : ''});
            break;
            default:

            break;
        }
    }, [keyPress])

    return ([keyPress])
}

export default useActionUser

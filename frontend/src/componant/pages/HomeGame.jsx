import React , {useContext} from 'react'
import RedTetrisBoard from './RedTetrisBoard';
import {Context} from './../context/Store';


function HomeGame() {
    const [state, dispatch] = useContext(Context);

    return (
        <div>
            <RedTetrisBoard currentBoard={state.tmpMap}/>
        </div>
    )
}

export default HomeGame

import React from 'react'
import RedTetrisBoard from './RedTetrisBoard';
import { useSelector } from 'react-redux';


function HomeGame() {
    const tmpMap = useSelector(state => state.game.tmpMap);

    return (
        <div>
            <RedTetrisBoard currentBoard={tmpMap}/>
        </div>
    )
}

export default HomeGame

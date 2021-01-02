import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function CreateGame() {

    const handleCreateGame = () =>{
        axios.post('http://localhost:4242/newGame')
        .then(res => console.log(res.data))
        .catch(err => console.log('error create game'))
    }

    return (
        <div>
            <Button onClick={handleCreateGame}>Create game</Button>
        </div>
    )
}

export default CreateGame;

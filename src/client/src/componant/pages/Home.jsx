import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import FormCreateUser from './../components/Form/CreateUser/FormCreateUser';
import FormCreateRoom from './../components/Form/CreateRoom/FormCreateRoom';

import ListRooms from './../components/List/ListRoom/ListRooms';

import HomeGame from './../pages/HomeGame';

import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
    let {username, room} = useSelector(state => state.user);
    return (
        <div>
            <Typography variant={'h1'}>
                RED TETRIS
            </Typography>
            <Typography variant='h5'>
                username : {username} | roomname : {room?.name}
            </Typography>

            <FormCreateUser />

            <FormCreateRoom />

            <ListRooms />

{/*}
            <HomeGame/>
    */}
        </div>
    )
}

export default Home

import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import FormCreateUser from './../components/Form/CreateUser/FormCreateUser';
import FormCreateRoom from './../components/Form/CreateRoom/FormCreateRoom';

import ListRooms from './../components/List/ListRoom/ListRooms';

import Grid from '@material-ui/core/Grid';

import HomeGame from './../pages/HomeGame';

import SelectorRooms from './../components/List/ListRoom/SelectorRooms'

import {useSelector, useDispatch} from 'react-redux';
import CenterPage from './../components/Layout/CenterPage'
import {SOCKET_GET_NEXT_TETRIMINOS, SOCKET_RUN_GAME} from './../../redux/Constant/SocketIOProtocol';

const HeaderBar = ({username}) => {
    return (
        <header style={{backgroundColor:'orange'}}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item>
                    <Typography variant='h3' style={{margin : '16px'}}>TETRIS V0.1</Typography>
                </Grid>
                <Grid item style={{marginLeft : 'auto'}}>
                    <Typography variant='h5' style={{margin : '16px'}}>{username}</Typography>
                </Grid>

            </Grid>
        </header>
    );
}

const Home = () => {
    let {username, room, isConnect} = useSelector(state => state.user);
    let dispatch = useDispatch();

    return (
        <>
        <HeaderBar username={username}/>
            { (!isConnect && room === null) &&
                <FormCreateUser />
            }
             { (isConnect && room === null) &&
                <CenterPage>
                    <FormCreateRoom />
                    <SelectorRooms />
                </CenterPage>
            }

            {
                room !== null && 
                <> 
                    <Typography>Current room : {room.name}</Typography>
                    <Button onClick={() => {dispatch({type : SOCKET_RUN_GAME})}}>RUN GAME</Button>
                    <HomeGame />
               </>     
            }

            {/*
            <Typography variant='h5'>
                username : {username} | roomname : {room?.name}
            </Typography>
 
            { !isConnect &&
                <FormCreateUser />
            }
           
            <ListRooms />
        -*/}
        {/*}
            <Button onClick={() => dispatch({type : SOCKET_GET_NEXT_TETRIMINOS})}>get tettriminos</Button>
            <Button onClick={}>Start</Button>
            <HomeGame/>
    */}
        </>
    )
}

export default Home

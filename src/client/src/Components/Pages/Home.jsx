import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormCreateUser from './../components/Form/CreateUser/FormCreateUser';
import FormCreateRoom from './../components/Form/CreateRoom/FormCreateRoom';

import Grid from '@material-ui/core/Grid';

import HomeGame from './../Pages/HomeGame';

import SelectorRooms from './../components/List/ListRoom/SelectorRooms'

import {useSelector, useDispatch} from 'react-redux';
import CenterPage from '../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import {SOCKET_RUN_GAME} from './../../redux/Constant/SocketIOProtocol';

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
    let {username, isConnect} = useSelector(state => state.user);
    let {room} = useSelector(state => state.user);
    let dispatch = useDispatch();
    const tetriList = useSelector(state => state.game.tetriList);


    return (
        <>
        <div>Nb tetriminos list : {tetriList.length}</div>
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
                    {
                        (room.owner === username && room.state === 'WAIT_USER') &&
                        <Button onClick={() => {dispatch({type : SOCKET_RUN_GAME})}}>RUN GAME</Button>
                    }
                    <HomeGame />
               </>     
            }
        </>
    )
}

export default Home
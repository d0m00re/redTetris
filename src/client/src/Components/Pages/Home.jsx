import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormCreateUser from './../components/Form/CreateUser/FormCreateUser';
import FormCreateRoom from './../components/Form/CreateRoom/FormCreateRoom';

import Grid from '@material-ui/core/Grid';

import HomeGame from './../Pages/HomeGame';

import SelectorRooms from './../components/List/ListRoom/SelectorRooms'

import { useSelector, useDispatch } from 'react-redux';
import CenterPage from '../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import { SOCKET_RUN_GAME } from './../../redux/Constant/SocketIOProtocol';

const HeaderBar = ({ text, variant }) => {
    return (
        <header style={{ backgroundColor: 'orange' }}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                    <Typography variant={variant} style={{ margin: '16px' }}>{text}</Typography>
                </Grid>
            </Grid>
        </header>
    );
}

const Home = () => {
    let { username, isConnect } = useSelector(state => state.user);
    let { room } = useSelector(state => state.user);
    let dispatch = useDispatch();

    return (
        <>
            {(!isConnect && room === null) &&
                <CenterPage>
                    <HeaderBar text={'RED TETRIS'} variant={'h3'} />
                    <FormCreateUser />
                </CenterPage>
            }
            {(isConnect && room === null) &&
                <CenterPage>
                    <HeaderBar text={`${username}`} variant={'h5'} />
                    <FormCreateRoom />
                    <SelectorRooms />
                </CenterPage>
            }

            { 
                room !== null &&
                <>
                    {

                        (room.owner === username && room.state === 'WAIT_USER') &&
                        <CenterPage>
                            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
                            <Button onClick={() => { dispatch({ type: SOCKET_RUN_GAME }) }}>RUN GAME</Button>
                        </CenterPage>
                    }

                    {

                        (room.state === 'RUNING_GAME') &&
                        <CenterPage>
                            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
                            <Button onClick={() => { dispatch({ type: SOCKET_RUN_GAME }) }}>RUN GAME</Button>
                            <HomeGame />
                        </CenterPage>
                    }
                </>
            }
        </>
    )
}

export default Home
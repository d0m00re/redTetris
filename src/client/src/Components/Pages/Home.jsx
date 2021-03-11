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
import { SOCKET_RUN_GAME, SOCKET_LEAVE_ROOM } from './../../redux/Constant/SocketIOProtocol';

import HeaderBar from './../Organisms/HeaderBar/HeaderBar';

import GameMenu from './../Pages/Game/GameMenu/GameMenu';

import GameResult from './Game/GameResult/GameResult';//'./../Pages/GameResult/GameResult';

const Home = () => {
    let { username, isConnect } = useSelector(state => state.user);
    let { room } = useSelector(state => state.user);
    //let room.state = useSelector(state => state.user.state);

    let dispatch = useDispatch();

    const runGame = () => dispatch({ type: SOCKET_RUN_GAME });

    const leaveRoom = () => dispatch({type : SOCKET_LEAVE_ROOM})

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
                (room !== null && room !== undefined) &&
                <>
                    {
                        (room.userList.filter(_user => _user === username) && room.state === 'WAIT_USER') &&
                            <GameMenu username={username}
                                      room={room}
                                      funcRunGame={runGame}
                                      funcLeaveRoom={leaveRoom}
                                      owner={room.owner === username}/>
                    }

                    {
                        (room.state === 'RUNING_GAME') &&
                        <CenterPage>
                            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
                            <HomeGame />
                        </CenterPage>
                    }
                    {
                        (room.state === 'END_GAME') &&
                            <GameResult />
                    }
                </>
            }
        </>
    )
}

//room.owner === username

export default Home
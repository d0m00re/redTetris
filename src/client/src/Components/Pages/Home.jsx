import React from 'react'
import HomeGame from './../Pages/HomeGame';

import { useSelector, useDispatch } from 'react-redux';
import CenterPage from '../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import { SOCKET_RUN_GAME, SOCKET_LEAVE_ROOM, SOCKET_PLAY_AGAIN } from './../../redux/Constant/SocketIOProtocol';

import HeaderBar from './../Organisms/HeaderBar/HeaderBar';

import GameMenu from './../Pages/Game/GameMenu/GameMenu';

import GameResult from './Game/GameResult/GameResult';//'./../Pages/GameResult/GameResult';

import Login from './Login/Login';

import RoomLoby from './RoomLoby/RoomLoby'

const Home = () => {
    let { username, isConnect } = useSelector(state => state.user);
    let room = useSelector(state => state.gameRoom);

    let dispatch = useDispatch();

    const runGame = () => dispatch({ type: SOCKET_RUN_GAME });

    const leaveRoom = () => dispatch({type : SOCKET_LEAVE_ROOM});

    const playAgain = () => dispatch({type : SOCKET_PLAY_AGAIN});

    return (
        <>
            {(!isConnect && room.name.length === 0) &&
               <Login />
            }
            {(isConnect &&  room.name.length === 0) &&
                <RoomLoby username={username} />
            }

            { 
                ((isConnect &&  room.name.length > 0)) &&
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
                            <GameResult winner={room.userList[0]}
                                        otherPlayer={room.leaderboard}
                                        funcLeaveRoom={leaveRoom}
                                        funcPlayAgain={playAgain}
                                        ownerBool={room.owner === username} />
                    }
                </>
            }
        </>
    )
}

//room.owner === username

export default Home
import { initialState as socketInfoInitState } from './../reducers/GeneralSocketInfo';
import { initialState as gameInitState } from './../reducers/Game';
import { initialState as userInitState } from './../reducers/User';

import { configureStore } from './../redux';

const roomLoby = {
    user: userInitState,
    game: gameInitState,
    generalSocketInfo: socketInfoInitState,
}

roomLoby.generalSocketInfo.roomlist = [
    {
        name: 'room1',
        uuid: '',
        userlist: ['john', 'jack'],
        owner: 'john',
        state: 'WAIT_USER',
        leaderboard: []
    },
    {
        name: 'room2',
        uuid: '',
        userlist: ['d0m', 'jack'],
        owner: 'd0m',
        state: 'WAIT_USER',
        leaderboard: []
    }
];

roomLoby.user.username = 'JackR';

export default configureStore(roomLoby); 
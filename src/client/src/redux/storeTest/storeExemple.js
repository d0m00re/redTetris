import { initialState as socketInfoInitState } from './../reducers/GeneralSocketInfo';
import { initialState as gameInitState } from './../reducers/Game';
import { initialState as userInitState } from './../reducers/User';

import { configureStore } from './../redux';

export const DefaultState = configureStore({
    user: userInitState,
    game: gameInitState,
    generalSocketInfo: socketInfoInitState,
});
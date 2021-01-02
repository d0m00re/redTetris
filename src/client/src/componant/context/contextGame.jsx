import React from 'react';

const defaultState = [];

const GameContext = React.createContext([defaultState, null]);

export default GameContext;
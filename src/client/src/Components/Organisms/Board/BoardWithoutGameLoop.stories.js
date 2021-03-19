import React from 'react';
import BoardWithoutGameLoop from './BoardWithoutGameLoop';
// value

let tab = Array(20).fill([]).map(() => Array(10).fill(0))  

tab[10] = Array(10).fill(2);

export const ByDefault = () => <BoardWithoutGameLoop currentBoard={tab} />;

const Info = {
    title: 'Game Board'
};

export default Info;
import React from 'react';
import ViewBoardAdv from './ViewBoardAdv';


let tab = Array(20).fill([]).map(() => Array(10).fill(0))  

tab[17] = [...Array(8).fill(2), 0, 0];
tab[18] = [...Array(9).fill(2), 0];
tab[19] = Array(10).fill(2);

export const ByDefault = () => <ViewBoardAdv currentBoard={tab} />;

export default {
    title: 'Game Board Adv'
};
import React from "react";
import useGameLoop from '../../hook/useGameLoop';
import BoardWithoutGameLoop from './BoardWithoutGameLoop';

const Board = ({currentBoard}) => {
  useGameLoop();
 
  return (
    <>
      <BoardWithoutGameLoop currentBoard={currentBoard} />
    </>
  );
};

export default Board;
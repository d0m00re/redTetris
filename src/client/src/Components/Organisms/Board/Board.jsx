import React from "react";
import useGameLoop from '../../hook/useGameLoop';
import BoardWithoutGameLoop from './BoardWithoutGameLoop';
import PropTypes from 'prop-types';

const Board = ({currentBoard, nbLineBlock}) => {
  useGameLoop();
 
  return (
    <>
      <BoardWithoutGameLoop currentBoard={currentBoard} nbLineBlock={nbLineBlock}/>
    </>
  );
};

Board.defaultProps = {
  currentBoard : Array(20).fill().map(() => Array(10).fill(0))
};

Board.propTypes = {
  currentBoard : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default Board; 
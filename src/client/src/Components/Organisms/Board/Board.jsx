import React from "react";
import Grid from "@material-ui/core/Grid";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';

import { makeStyles } from '@material-ui/core/styles';

import useGameLoop from '../../hook/useGameLoop';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#333',
        border : '1px',
        borderColor : '#666',
        width : '100%',
    }
})


const Board = ({currentBoard}) => {
  useGameLoop();

  return (
    <div >    
      <div style={{width: '50%', height : '50%'}}>
      {currentBoard.map((row, indexRow) => (
        <Grid container direction="row" key={"rowrow" + indexRow} className={useStyles.root}>
          <TetrisRow row={row}></TetrisRow>
        </Grid>
      ))}
      </div>
    </div>
  );
};

export default Board;
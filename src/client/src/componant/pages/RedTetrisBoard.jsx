import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RedTetrisRow from "./RedTetrisRow";

import { makeStyles } from '@material-ui/core/styles';

import useGameLoop from './../hook/useGameLoop';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#333',
        border : '1px',
        borderColor : '#666',
        width : '100%',
    }
})


const RedTetrisBoard = ({currentBoard}) => {
  useGameLoop();

  return (
    <div >    
      <div style={{width: '50%', height : '50%'}}>
      {currentBoard.map((row, indexRow) => (
        <Grid container direction="row" key={"rowrow" + indexRow} className={useStyles.root}>
          <RedTetrisRow row={row}></RedTetrisRow>
        </Grid>
      ))}
      </div>
    </div>
  );
};

export default RedTetrisBoard;

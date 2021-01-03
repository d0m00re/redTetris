import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RedTetrisRow from "./RedTetrisRow";

import { makeStyles } from '@material-ui/core/styles';

import CreateGame from './CreateGame';

import useActionUser from './../hook/useActionUser';

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
  let [keyPress] = useActionUser();
  useGameLoop();
  let [dimBoard, setDimBoard] = useState({ w: 10, h: 20 });
  let [board, setBoard] = useState(
    Array(dimBoard.h)
      .fill()
      .map(() => Array(dimBoard.w).fill(0))
  );

  useEffect(() => {
    /*console.log*/(dimBoard);
    /*console.log*/(board);
  }, []);
  return (
    <div >
      <Typography>RED TETRIS</Typography>
      <CreateGame/>
    
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

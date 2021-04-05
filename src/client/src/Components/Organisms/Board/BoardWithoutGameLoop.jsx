import React from "react";
import Grid from "@material-ui/core/Grid";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#333',
        border : '1px',
        borderColor : '#666',
    }
})


const BoardWithoutGameLoop = ({currentBoard}) => { 
  return (
    <div >    
      <div>
      {currentBoard.map((row, indexRow) => (
        <Grid container key={`boardWithoutGameLoop-${indexRow}`} direction="row" className={useStyles.root}>
          <TetrisRow row={row} keyFather={indexRow}></TetrisRow>
        </Grid>
      ))}
      </div>
    </div>
  );
};

export default BoardWithoutGameLoop;
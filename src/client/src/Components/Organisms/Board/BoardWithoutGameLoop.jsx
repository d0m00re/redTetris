import React from "react";
import Grid from "@material-ui/core/Grid";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';
import PropTypes from 'prop-types';

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

BoardWithoutGameLoop.defaultProps = {
  currentBoard :Array(20).fill().map(() => Array(10).fill(0))
};

BoardWithoutGameLoop.propTypes = {
  currentBoard : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default BoardWithoutGameLoop;
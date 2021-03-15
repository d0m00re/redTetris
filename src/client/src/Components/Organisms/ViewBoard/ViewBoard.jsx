import React from "react";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#333',
        border : '1px',
        borderColor : '#666',
    },
    flexRow:{
        display: 'flex',
        flexDirection: 'row'
    }
})

const ViewBoard = ({currentBoard}) => {
  const styles = useStyles();

  return (
    <div >    
      {currentBoard.map((row, indexRow) => (
        <div key={"rowrow" + indexRow} className={styles.flexRow}>
          <TetrisRow row={row}></TetrisRow>
        </div>
      ))}
    </div>
  );
};

export default ViewBoard;
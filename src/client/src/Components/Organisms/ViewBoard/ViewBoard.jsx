import React from "react";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     paddingBottom : '8px'

    },
    flexRow:{
        display: 'flex',
        justifyContent : 'center',
        flexDirection: 'row',
    }
})

const ViewBoard = ({currentBoard}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>     
      {currentBoard.map((row, indexRow) => (
        <div key={"rowrow" + indexRow} className={styles.flexRow}>
          <TetrisRow row={row}></TetrisRow>
        </div>
      ))}
    </div>
  );
};

export default ViewBoard;
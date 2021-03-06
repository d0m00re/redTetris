import React from "react";
import TetrisRow from '../../Molecules/TetrisRow/TetrisRow';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

ViewBoard.propTypes = {
  currentBoard : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
}

export default ViewBoard;
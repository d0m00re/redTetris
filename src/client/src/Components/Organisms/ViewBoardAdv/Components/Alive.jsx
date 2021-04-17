
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TetrisRowAdv from '../../../Molecules/TetriRowAdv/TetriRowAdv'

const useStyles = makeStyles({    
    flexRow: {
      display: 'flex', 
      flexDirection: 'row',
    }
  })

const Alive = ({ row, keyFather }) => {
    const classes = useStyles();
  
    return (
      <div className={classes.flexRow} key={"row-" + keyFather}>
        <TetrisRowAdv row={row} keyFather={keyFather}></TetrisRowAdv>
      </div>);
  }

export default React.memo(Alive);
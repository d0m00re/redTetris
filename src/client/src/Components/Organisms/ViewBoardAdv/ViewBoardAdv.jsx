import React from 'react';
import TetrisRowAdv from '../../Molecules/TetriRowAdv/TetriRowAdv'
 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        //backgroundColor : '#333',
        border : '1px solid black',
    },
    flexRow : {
      display: 'flex',
      flexDirection: 'row'
    }
}) 

 const ViewBoardAdv = ({currentBoard}) => {
   const styles = useStyles();
     return (
       <div className={styles.root}>
        {currentBoard.map((row, indexRow) => (
          <div className={styles.flexRow} key={"rowrow" + indexRow}>
            <TetrisRowAdv row={row}></TetrisRowAdv>
          </div>
        ))}
        </div>
     )
 }
 
 export default ViewBoardAdv
  
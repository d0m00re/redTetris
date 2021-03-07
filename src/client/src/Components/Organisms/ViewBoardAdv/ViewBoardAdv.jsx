 import React from 'react';
 import Grid from "@material-ui/core/Grid";
import TetrisRowAdv from './../../Molecules/TetriRowAdv/TetriRowAdv'
 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#333',
        border : '1px',
        borderColor : '#666',
        width : '100%',
    }
})

 const ViewBoardAdv = ({currentBoard}) => {
     return (
        <div >    
        <div>
        {currentBoard.map((row, indexRow) => (
          <Grid container direction="row" key={"rowrow" + indexRow} className={useStyles.root}>
            <TetrisRowAdv row={row}></TetrisRowAdv>
          </Grid>
        ))}
        </div>
      </div>
     )
 }
 
 export default ViewBoardAdv
  
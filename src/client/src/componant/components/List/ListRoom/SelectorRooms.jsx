import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux';
const useStyles = makeStyles({
    button: {
        justifyContent: 'center', marginTop: '8px'
    }
});


const SelectorRooms = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    useEffect(() => {
        console.log('PPPP');
        
        console.log(roomlist);
        
    }, [roomlist])
    return (
        <table>
            <tr>
                <th>Roomname</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Join</th>
            </tr>
            {
                roomlist.map(elem => 
                    <tr>
                        <td>{elem.name}</td>
                    <td>{elem.owner.name}</td>
                    <td>{elem?.state}</td>
                    <td>
                        <Button>JOIN</Button>
                    </td>
                    </tr>
                    )
            }
        </table>
    )
}

export default SelectorRooms

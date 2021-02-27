import React, {useEffect} from 'react'
import PropTypes from 'prop-types';

const TetriRow = (row) => {
    return (row.map(caseValue => <>{caseValue}</>));
}

const NextTetriminos = ({tetriminos}) => {

    
    useEffect(() => {
        console.log('Next tetriminos:');
        console.log(tetriminos);
    }, [tetriminos])
    
    return (
        <div>
            {
                tetriminos !== null &&
                tetriminos.map(tetriRow => <div>{TetriRow(tetriRow)}</div>)
            }
        </div>
    )
}

/*
NextTetriminos.prototype = {
    tetriminos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
}
*/
export default NextTetriminos

import React from 'react';
import CaseBoolColor from './../../Atoms/CaseBoolColor/CaseBoolColor';

const TetriRowAdv = ({row, indexRow = 0}) => {    
    return (
        <>
            {
                row.map((value, indexElem) => <CaseBoolColor caseValue={value} indexRow={indexRow} indexCase={indexElem} />)
            }
        </>
    )
}

export default TetriRowAdv
  
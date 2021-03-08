import React from 'react';
import CaseBoolColor from './../../Atoms/CaseBoolColor/CaseBoolColor';

const TetriRowAdv = ({row}) => {    
    return (
        <>
            {
                row.map((value, indexElem) => <CaseBoolColor caseValue={value} indexCase={indexElem} />)
            }
        </>
    )
}

export default TetriRowAdv

import React from 'react';
import CaseBoolColor from './../../Atoms/CaseBoolColor/CaseBoolColor';

const TetriRowAdv = ({row, key}) => {    
    return (
        <>
            {
                row.map((value, indexElem) => <CaseBoolColor caseValue={value} key={`${key}-${indexElem}`} />)
            }
        </>
    )
}

export default React.memo(TetriRowAdv);
  
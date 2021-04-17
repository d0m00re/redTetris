import React from 'react';
import CaseBoolColor from './../../Atoms/CaseBoolColor/CaseBoolColor';

const TetriRowAdv = ({row, keyFather}) => {    
    return (
        <>
            {
                row.map((value, indexElem) => <CaseBoolColor caseValue={value} key={`${keyFather}-${indexElem}`} />)
            }
        </>
    )
}

export default React.memo(TetriRowAdv);
  
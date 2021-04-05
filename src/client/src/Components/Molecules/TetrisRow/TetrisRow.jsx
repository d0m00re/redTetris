import React from 'react'
import CaseColor from './../../Atoms/CaseColor/CaseColor';

const TetrisRow = ({row, keyFather}) => {
    return (
        <>
        {
            row.map((elem, indexElem) => <CaseColor  caseValue={elem} indexCase={`CaseColor${keyFather}-${indexElem}`} key={`CaseColor${keyFather}-${indexElem}`} />)
        } 
        </>
    );
}

export default React.memo(TetrisRow);
 
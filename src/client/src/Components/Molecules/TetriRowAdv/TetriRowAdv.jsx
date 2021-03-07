import React from 'react';
import CaseBoolColor from './../../Atoms/CaseBoolColor/CaseBoolColor';

const TetriRowAdv = ({row}) => {
    return (
        <div>
            {
            row.map((elem, indexElem) => <CaseBoolColor caseValue={elem} indexCase={indexElem} />)
            }
        </div>
    )
}

export default TetriRowAdv

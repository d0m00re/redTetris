import React from 'react'
import CaseColor from './../../Atoms/CaseColor/CaseColor';
import PropTypes from 'prop-types';

const TetrisRow = ({row, keyFather}) => {
    return (
        <>
        {
            row.map((elem, indexElem) => <CaseColor  caseValue={elem} indexCase={`CaseColor${keyFather}-${indexElem}`} key={`CaseColor${keyFather}-${indexElem}`} />)
        } 
        </>
    );
}

TetrisRow.propsTypes = {
    row : PropTypes.arrayOf(PropTypes.number),
    keyFather : PropTypes.string
}

export default React.memo(TetrisRow);
 
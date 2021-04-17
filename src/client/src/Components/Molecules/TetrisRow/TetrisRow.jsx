import React from 'react'
import CaseColor from './../../Atoms/CaseColor/CaseColor';
import PropTypes from 'prop-types';

const TetrisRow = ({row, keyFather, block}) => {
    return (
        <>
        {
            row.map((elem, indexElem) => <CaseColor
                                            caseValue={(block && elem !== 0) ? 8 : elem}
                                            indexCase={`CaseColor${keyFather}-${indexElem}`}
                                            key={`CaseColor${keyFather}-${indexElem}`} />)
        } 
        </>
    );
}

TetrisRow.propsTypes = {
    row : PropTypes.arrayOf(PropTypes.number),
    keyFather : PropTypes.string,
    block : PropTypes.bool
};

TetrisRow.defaultProps = {
    block : false
}

export default React.memo(TetrisRow);
 
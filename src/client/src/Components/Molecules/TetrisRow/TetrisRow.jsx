import React, {useEffect} from 'react'
import CaseColor from './../../Atoms/CaseColor/CaseColor';

const TetrisRow = ({row}) => {
    return (
        <>
        {
            row.map((elem, indexElem) => <CaseColor caseValue={elem} indexCase={indexElem} />)
        } 
        </>
    )
}

export default TetrisRow

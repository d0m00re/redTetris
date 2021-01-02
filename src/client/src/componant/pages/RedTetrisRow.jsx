import React from 'react'
import RedTetrisCase from './RedTetrisCase';

/*
<Grid item key={'case' + indexElem}
                                            className={clsx(classes.root, (elem === 0) ? classes.blue : classes.orange)}>{elem}</Grid>
*/
const RedTetrisRow = ({row}) => {

    return (
        <>
        {
            row.map((elem, indexElem) => <RedTetrisCase caseValue={elem} indexCase={indexElem} />)
        }
        </>
    )
}

export default RedTetrisRow

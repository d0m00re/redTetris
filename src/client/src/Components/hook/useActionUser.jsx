import {useState, useEffect} from 'react'
import useKeyPress from './useKeyPress';
import getKey from './../../utils/getKey';

const useActionUser = () => {
    const [keyPress] = useKeyPress();
    const [action, setAction] = useState('');
    
    useEffect(() => {
        let key = getKey(keyPress);

        if (key !== undefined)
            setAction(key);
        else if (key === undefined && action !== '')
            setAction('');
    }, [keyPress])

    return ([action])
}

export default useActionUser
 
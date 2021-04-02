import {useState, useEffect} from 'react'
import useKeyPress from './useKeyPress';

const useActionUser = () => {
    const [keyPress] = useKeyPress();
    const [action, setAction] = useState('');
    
    useEffect(() => {
        
    switch(keyPress){
            case 'ArrowRight':
                setAction('right');
            break;
            case 'ArrowLeft':
                setAction('left');
            break;
            case 'ArrowUp':
                setAction('rotate');
            break;
            case 'ArrowDown':
                setAction('down');
            break;
            case 'Space':
                setAction('space')
            break;
            default:                
                if (action !== '')
                    setAction('')
            break;
        }
    }, [keyPress])

    return ([action])
}

export default useActionUser

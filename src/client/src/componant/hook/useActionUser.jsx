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
                console.log('action keypress : ' + keyPress);
                
                if (action !== '')
                    setAction('')
                console.log(keyPress);
            break;
        }
    }, [keyPress])

    return ([action])
}

export default useActionUser

import React,{useEffect, useState} from 'react'


const useKeyPress = () => {
    const [keyPress, setKeyPress] = useState('');

    // If pressed key is our target key then set to true

  const downHandler = (event) => {
      setKeyPress(event.code);
   }

  const upHandler = () => {
      console.log('up handler');
      setKeyPress('');
  };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
    
        return () => {
          window.removeEventListener('keydown', downHandler);
          window.removeEventListener('keyup', upHandler);
        };
    }, [])

    return ([keyPress]);
}

export default useKeyPress

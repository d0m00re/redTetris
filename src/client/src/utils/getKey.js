const getKey = (_keyPress) => {
    switch(_keyPress){
        case 'ArrowRight':
            return ('right');
        
        case 'ArrowLeft':
            return ('left');
        
        case 'ArrowUp':
            return ('rotate');
        
        case 'ArrowDown':
            return ('down');
        
        case 'Space':
            return ('space')
        
        default:            
            return undefined;
        
    }
};

export default getKey;
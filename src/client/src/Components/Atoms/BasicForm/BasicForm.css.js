import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      justifyContent: 'center',
      padding: '3px 8px',
      height: '25px',
      marginLeft: '8px',
      backgroundColor: 'orange'   },

    inputColor: { 
      backgroundColor: 'white',
      padding: '8px 4px'
    },
    
    flexRow: {
          width : '95%',
          margin: '5px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fcbf49'
      }
  });

export default useStyles;
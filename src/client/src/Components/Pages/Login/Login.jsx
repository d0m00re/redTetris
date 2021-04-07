import React from 'react'

import CenterPage from '../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import HeaderBar from '../../Organisms/HeaderBar/HeaderBar';
import FormCreateUser from '../../components/Form/CreateUser/FormCreateUser';
import { Alert, AlertTitle } from '@material-ui/lab';



const Login = ({err, errMsg}) => {
    return (
        <CenterPage>
            <HeaderBar text={'Red Tetris'} variant={'h3'} />
            <FormCreateUser />
            {err &&
            <Alert severity={'error'} style={{width: '90%'}}>
                {errMsg}
            </Alert>}
        </CenterPage>
    )
} 

export default Login

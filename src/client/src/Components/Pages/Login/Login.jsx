import React from 'react'

import CenterPage from '../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import HeaderBar from '../../Organisms/HeaderBar/HeaderBar';
import FormCreateUser from '../../components/Form/CreateUser/FormCreateUser';


const Login = () => {
    return (
        <CenterPage>
            <HeaderBar text={'RED TETRIS'} variant={'h3'} />
            <FormCreateUser />
        </CenterPage>
    )
}

export default Login

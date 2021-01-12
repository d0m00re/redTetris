import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import FormCreateUser from './../components/Form/CreateUser/FormCreateUser';
import FormCreateRoom from './../components/Form/CreateRoom/FormCreateRoom';
import HomeGame from './../pages/HomeGame';
const Home = () => {
    return (
        <div>
            <Typography variant={'h1'}>
                RED TETRIS
            </Typography>

            <FormCreateUser />

            <FormCreateRoom />


            <HomeGame/>

        </div>
    )
}

export default Home

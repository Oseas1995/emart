import { FormControl, FormLabel, Grid, Heading, Input, Stack, Button } from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { useState } from "react"
import { obtenerUsuario } from '../servicios/auth'
import { Link } from 'react-router-dom'


const initialState = {
    email: '',
    password: ''
}
const Login = () => {
    const { formularioRegistro, handleInputChange } = useForm(initialState)

    const { email, password } = formularioRegistro

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resultado = await obtenerUsuario({ email, password })
        if (resultado.error) {
            alert('ocurrio un error vuelva a probar con los datos correctos')
        }else{
            alert('bienvenido')
        }
    }
return (
    <>
        <Grid h='100%' placeContent="center" w='auto'>
            <Heading fontSize='2xl' mb='20px'>Login</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={5}>
                    <FormControl id='email' isRequired>
                        <FormLabel>Correo</FormLabel>
                        <Input type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl id='password' isRequired>
                        <FormLabel>Contraseña</FormLabel>
                        <Input type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange} />
                    </FormControl>
                    <Button type='submit' colorScheme='blue'>Login</Button>
                    <FormControl id='registro'>
                        <FormLabel>¿no tienes una cuenta?</FormLabel>
                        <Link to='/registro'><p color='red'>Registrate aqui</p></Link>
                    </FormControl>
                </Stack>
            </form>
        </Grid>
    </>
)
}

export default Login
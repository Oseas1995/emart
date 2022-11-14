import {
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Stack,
    Button,
    Container
} from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { useEffect, useState } from "react"
import { obtenerUsuario } from '../servicios/auth'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../api/config'


const initialState = {
    email: '',
    password: ''
}
const Login = () => {
    const { formularioRegistro, handleInputChange } = useForm(initialState)
    const { email, password } = formularioRegistro


    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const resultado = await obtenerUsuario({ email, password })
        if (resultado.error) {
            alert('ocurrio un error vuelva a probar con los datos correctos')
        } else {
            alert('bienvenido')
            navigate('/');
        }
    };

    useEffect(() => {
        if (!supabase.auth.getSession()) {
            navigate('/');
        }
    }, [navigate]);



    return (
        <>
            <Grid height="50%" placeContent="center">
                <Container background="blue.50" alignItems="center" placeContent="center">
                    <Heading  placeContent="center" alignItems="center" fontSize='2xl' >Login</Heading>

                    <Stack spacing={5}>
                        <FormControl id='email' isRequired>
                            <FormLabel>Correo</FormLabel>
                            <Input background="whiteAlpha.20" type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <Input background="whiteAlpha.20" type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange} />
                        </FormControl>
                        <Button type='submit' colorScheme='blue' onClick={handleSubmit}>Login</Button>
                        <FormControl id='registro'>
                            <FormLabel>¿no tienes una cuenta?</FormLabel>
                            <Link to='/registro'><p background='red'>Registrate aqui</p></Link>
                        </FormControl>
                    </Stack>
                </Container>
            </Grid>
        </>
    )
}

export default Login
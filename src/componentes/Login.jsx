import { FormControl, FormLabel, Grid, Heading, Input, Stack, Button } from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { actualizarUsuario, registroConEmail } from '../servicios/auth'

const initialState = {
    email: '',
    password: ''
}
const Login = () => {
    const { formularioRegistro, handleInputChange } = useForm(initialState)
    
    const { email, password } = formularioRegistro

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const { nombre, apellido, email, password, phone } = formularioRegistro
        //const resultado = await registroConEmail({ email, password })
        // console.log(resultado.data.user.id)
        // if (resultado) {
            
        //     const user = resultado.data.user
        //     // console.log(user.id);
        //     const data = {
        //         id: user.id,
        //         nombre: nombre,
        //         apellido: apellido,
        //         telefono: phone
        //     }
        //     await actualizarUsuario(data)
        // }
    }

    return (
        <>
            <Grid h='100%' placeContent='center' w='auto'>
                <Heading fontSize='2xl' mb='20px'>Login</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl id='email' isRequired>
                            <FormLabel>Correo</FormLabel>
                            <Input type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange}/>
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange}/>
                        </FormControl>
                        <Button type='submit' colorScheme='blue'>Login</Button>
                    </Stack>
                </form>
            </Grid>
        </>
    )
}

export default Login
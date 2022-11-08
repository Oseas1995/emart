import { FormControl, FormLabel, Grid, Heading, Input, Stack, Button } from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { actualizarUsuario, registroConEmail } from '../servicios/auth'

const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    phone: ''
}

const Registro = () => {
    
    const { formularioRegistro, handleInputChange } = useForm(initialState)
    
    const { nombre, apellido, email, password, phone } = formularioRegistro
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { nombre, apellido, email, password, phone } = formularioRegistro
        const resultado = await registroConEmail({ email, password })
        // console.log(resultado.data.user.id)
        if (resultado) {
            
            const user = resultado.data.user
            // console.log(user.id);
            const data = {
                id: user.id,
                nombre: nombre,
                apellido: apellido,
                telefono: phone
            }
            await actualizarUsuario(data)
        }
    }

    return (
        <>
            <Heading fontSize='2xl' mb='20px'>Registro</Heading>
            <form onSubmit={handleSubmit}>
                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                    <FormControl id='nombre' isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='texto' name='nombre' placeholder='Nombre' value={nombre} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id='apellido' isRequired>
                        <FormLabel>Apellido</FormLabel>
                        <Input type='texto' name='apellido' placeholder='Apellido' value={apellido} onChange={handleInputChange}/>
                    </FormControl>
                </Grid>
                <Stack spacing={4}>
                    <FormControl id='email' isRequired>
                        <FormLabel>Correo</FormLabel>
                        <Input type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id='password' isRequired>
                        <FormLabel>Contraseña</FormLabel>
                        <Input type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id='confirmarContraseña' isRequired>
                        <FormLabel>Confirmar Contraseña</FormLabel>
                        <Input type='password' name='confirmarContraseña' placeholder='Confirmar Contraseña'/>
                    </FormControl>
                    <FormControl id='phone' isRequired>
                        <FormLabel>Telefono</FormLabel>
                        <Input type='texto' name='phone' placeholder='telefono' value={phone} onChange={handleInputChange}/>
                    </FormControl>
                    <Button type='submit' colorScheme='blue'>Registrar</Button>
                </Stack>
                
            </form>
        </>
    )
    }

export default Registro

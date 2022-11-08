import { FormControl, FormLabel, Grid, Heading, Input, Stack, Button } from '@chakra-ui/react'

const Registro = () => {
    return (
        <>
            <Heading fontSize='2xl'>Registro</Heading>
            <form>
                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                    <FormControl id='nombre' isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='texto' name='nombre' placeHolder='nombre' />
                    </FormControl>
                    <FormControl id='apellido' isRequired>
                        <FormLabel>Apellido</FormLabel>
                        <Input type='texto' name='apellido' placeHolder='Apellido' />
                    </FormControl>
                </Grid>
                <Stack spacing={4}>
                    <FormControl id='correo' isRequired>
                        <FormLabel>Correo</FormLabel>
                        <Input type='email' name='correo' placeHolder='Correo' />
                    </FormControl>
                    <FormControl id='contraseña' isRequired>
                        <FormLabel>Contraseña</FormLabel>
                        <Input type='password' name='contraseña' placeHolder='contraseña' />
                    </FormControl>
                    <FormControl id='confirmarContraseña' isRequired>
                        <FormLabel>Confirmar Contraseña</FormLabel>
                        <Input type='password' name='confirmarContraseña' placeHolder='Confirmar Contraseña' />
                    </FormControl>
                    <FormControl id='telefono' isRequired>
                        <FormLabel>Telefono</FormLabel>
                        <Input type='texto' name='telefono' placeHolder='telefono' />
                    </FormControl>
                    <Button colorScheme='blue'>Registrar</Button>
                </Stack>
                
            </form>
        </>
    )
    }

export default Registro

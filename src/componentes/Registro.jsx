import {
    FormControl, FormLabel, Grid, Heading, Input, Stack, Button, Checkbox, HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Container

} from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { actualizarUsuario, registroConEmail } from '../servicios/auth'
import { useState } from "react"
import terminos from '../servicios/terminos'
import { Link } from 'react-router-dom'
import { supabase } from '../api/config'

const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    phone: '',
    admin: false,

}

const Registro = () => {
    const sesion = supabase.auth.getSession()
    console.log(sesion);
    const [cpassword, setCPassword] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { formularioRegistro, handleInputChange } = useForm(initialState)
    const { nombre, apellido, email, password, phone } = formularioRegistro
    const [agree, setAgree] = useState(false);

    const checkboxHandler = async () => {
        setAgree(!agree);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { nombre, apellido, email, password, phone, admin } = formularioRegistro
        const resultado = await registroConEmail({ email, password })
        if (password !== cpassword) {
            alert('contrasenia no coinciden')
        }else{
            if (resultado) {
                const user = resultado.data.user
                // console.log(user.id);
                const data = {
                    id: user.id,
                    nombre: nombre,
                    apellido: apellido,
                    telefono: phone,
                    es_admin: admin,
    
                }
                await actualizarUsuario(data)
            }

        }
        


        // console.log(resultado.data.user.id)

    }


    return (
        <>
            <Modal
                id='modal'
                isCentered
                closeOnOverlayClick={false}
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        {terminos()}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Aceptar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Container backgroundColor={"blue.50"}>
                <Grid height="100%" placeContent='center'>
                    <Heading fontSize='2xl' mb='20px'>Registro</Heading>
                    <form onSubmit={handleSubmit}>
                        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                            <FormControl id='nombre' isRequired>
                                <FormLabel>Nombre</FormLabel>
                                <Input background="whiteAlpha.20" type='texto' name='nombre' placeholder='Nombre' value={nombre} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='apellido' isRequired>
                                <FormLabel>Apellido</FormLabel>
                                <Input background="whiteAlpha.20" type='texto' name='apellido' placeholder='Apellido' value={apellido} onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Stack spacing={6}>
                            <FormControl id='email' isRequired>
                                <FormLabel>Correo</FormLabel>
                                <Input background="whiteAlpha.20" type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='password' isRequired>
                                <FormLabel>Contraseña</FormLabel>
                                <Input background="whiteAlpha.20" type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='confirmarContraseña' isRequired>
                                <FormLabel>Confirmar Contraseña</FormLabel>
                                <Input background="whiteAlpha.20" type='password' name='confirmarContraseña' placeholder='Confirmar Contraseña' value={cpassword} onChange={e => setCPassword(e.target.value)} />
                            </FormControl>
                            <FormControl id='phone' isRequired>
                                <FormLabel>Telefono</FormLabel>
                                <Input background="whiteAlpha.20" type='texto' name='phone' placeholder='telefono' value={phone} onChange={handleInputChange} />
                            </FormControl>
                            {/*aqui esta el Check de acuerdo a los Tos*/}
                            <FormControl>
                                <HStack>
                                    <Checkbox borderColor="blackAlpha.500" id="box" onChange={checkboxHandler}></Checkbox>
                                    <FormLabel >Estoy de acuerdo con los <a hrf="#" onClick={onOpen}>Terminos y condiciones</a></FormLabel>
                                </HStack>
                            </FormControl>
                            <FormControl id='identificar' placeContent='center'>
                                <FormLabel>¿Ya estas Registrado?</FormLabel>
                                <FormLabel textColor="blue.600"><Link to="/login"><a>Iniciar Sesion</a></Link></FormLabel>
                            </FormControl>
                            <Button isDisabled={!agree} type='submit' colorScheme='blue'>Registrar</Button>
                        </Stack>
                    </form>
                </Grid>
            </Container>
        </>
    )
}

export default Registro

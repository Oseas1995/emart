import {
    FormControl, FormLabel, Grid, Heading, Input, Stack, Button, Checkbox, HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
} from '@chakra-ui/react'
import useForm from '../hooks/useForm'
import { actualizarUsuario, registroConEmail } from '../servicios/auth'
import { useState } from "react"
import terminos from '../servicios/terminos'


const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    phone: ''
}

const Registro = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { formularioRegistro, handleInputChange } = useForm(initialState)

    const { nombre, apellido, email, password, phone } = formularioRegistro

    const [agree, setAgree] = useState(false);

    const checkboxHandler = async () => {
        setAgree(!agree);
    }
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
            <Grid h='100%' placeContent='center' w='auto'>
                <Heading fontSize='2xl' mb='20px'>Registro</Heading>
                <form onSubmit={handleSubmit}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                        <FormControl id='nombre' isRequired>
                            <FormLabel>Nombre</FormLabel>
                            <Input type='texto' name='nombre' placeholder='Nombre' value={nombre} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id='apellido' isRequired>
                            <FormLabel>Apellido</FormLabel>
                            <Input type='texto' name='apellido' placeholder='Apellido' value={apellido} onChange={handleInputChange} />
                        </FormControl>
                    </Grid>
                    <Stack spacing={5}>
                        <FormControl id='email' isRequired>
                            <FormLabel>Correo</FormLabel>
                            <Input type='email' name='email' placeholder='Correo' value={email} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type='password' name='password' placeholder='contraseña' value={password} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id='confirmarContraseña' isRequired>
                            <FormLabel>Confirmar Contraseña</FormLabel>
                            <Input type='password' name='confirmarContraseña' placeholder='Confirmar Contraseña' />
                        </FormControl>
                        <FormControl id='phone' isRequired>
                            <FormLabel>Telefono</FormLabel>
                            <Input type='texto' name='phone' placeholder='telefono' value={phone} onChange={handleInputChange} />
                        </FormControl>
                        {/*aqui esta el Check de acuerdo a los Tos*/}
                        <FormControl>
                            <HStack>
                                <Checkbox id="box" onChange={checkboxHandler}></Checkbox>
                                <FormLabel>Estoy de acuerdo con los <a onClick={onOpen}>Terminos y condiciones</a></FormLabel>
                            </HStack>
                        </FormControl>
                        <Button isDisabled={!agree} type='submit' colorScheme='blue'>Registrar</Button>
                    </Stack>
                </form>
            </Grid>
        </>
    )
}

export default Registro

import { Text, Box, Flex, Heading, VStack, FormControl, FormLabel, Input, HStack,Divider, Center, Button, Select } from "@chakra-ui/react";

function Administrador() {
    return (
        <>
            <Box 
                borderStyle="dashed"
                borderColor="gray.300"
                borderWidth="2px"
            >
                <Heading fontSize={['3xl']} align='center'>Perfil</Heading>
            </Box>

            <Box
                w={['1500', 'md']}
                p={[1, 10]}
                mt={[10, '1vh']}
                mx='1vh'
            >

                <Flex>
                    <HStack
                        spacing={120}
                        align='flex-start'
                        w='100vh'

                    >
                        {/*Aqui va el editado de perfil*/}
                        <VStack
                            backgroundColor={"blue.200"}
                            rounded='5'
                            spacing={4}
                            align='flex'
                            w='100vh'
                            p='15px'
                        >
                            <VStack spacing={1} align={['flex-start', 'center']} w='50vh'>
                                <Heading fontSize={['3xl']}>Lista de Usuarios</Heading>
                                <Text>informacion de los usuarios registrados</Text>
                            </VStack>
                            <VStack w='80vh'>
                                <FormControl>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Apellido</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Direccion</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Pagina Web</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>
                            </VStack>
                            <Button backgroundColor={'blue.500'} textColor='white' >Obtener</Button>
                        </VStack>

                        <Center h={'50vh'}>
                            <Divider orientation='vertical' />
                        </Center>
                        {/*Aqui el agregado de productos*/}

                        <VStack
                            backgroundColor={"blue.200"}
                            rounded='5'
                            spacing={4}
                            align='flex'
                            w='100vh'
                            p='15px'
                        >
                            <VStack spacing={1} align={['flex-start', 'center']} w='50vh'>
                                <Heading fontSize={['3xl']}>Productos</Heading>
                                <Text>Ingrese los productos que desea aqui</Text>
                            </VStack>
                            <HStack w='80vh'>
                                <FormControl>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Apellido</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>
                            </HStack>
                            <HStack>
                                <FormControl>
                                    <FormLabel>Tipo</FormLabel>
                                    <Select bg={'white'} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Pagina Web</FormLabel>
                                    <Input backgroundColor={'white'}></Input>
                                </FormControl>
                            </HStack>
                            <Button backgroundColor={'blue.500'} textColor='white' >Confirmar</Button>
                        </VStack>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}

export default Administrador
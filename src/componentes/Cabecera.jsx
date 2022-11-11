import "./Cabecera.css"
import { React } from 'react';
import { Image, Flex, Button, HStack, Text, chakra } from '@chakra-ui/react';


function Cabecera() {

    return (
        <chakra.header
            bg="black"
        >
            <Flex
                w="100%"
                px = "6"
                py = "5"
                align = "center"
                justify= "space-between"
            >
                <Text 
                    color="white" 
                    as='h1'
                    fontSize="24px"
                >Cabecera</Text>
            </Flex>
        </chakra.header>
    );
}

export default Cabecera;
import { Box, HStack, Image } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai';

{/*debe recibir aqui de base de datos la descripion, presion, etc.*/ }
function Producto() {
    return (
        <div className="producto">
            <Box className='pro_info'>
                <p>Producto #</p>
            </Box>
            <Box className='pro_precio'>
                <p>Lps.</p>
            </Box>
            <Box className='pro_calificacion'>
                <HStack>
                    <AiFillStar color='gold' fontSize='20px'></AiFillStar>
                    <AiFillStar color='gold' fontSize='20px'></AiFillStar>
                    <AiFillStar color='gold' fontSize='20px'></AiFillStar>
                </HStack>
            </Box>
            <Image
                className='img_prod'
                boxSize='150px'
                src="https://www.colombianosune.com/sites/default/files/asociaciones/NO_disponible-43_7.jpg"
                alt=""
            />
        </div>
    );
}
export default Producto
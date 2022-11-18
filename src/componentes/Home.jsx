import Registro from './Registro'
import "./Home.css"
import { Box, Grid } from '@chakra-ui/react'
import Producto from "./Producto"
import Cabecera from './Cabecera'

function Home() {
    return (
        <>
        <Cabecera />
        <div className="home">
            
            <div className="home_contenedor">
                <h1><big size="20px">Pagina Inicial</big></h1>
                <Grid templateColumns='repeat(6, 1fr)' gap={4}>
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
            </Grid>
        </div>
        </div >
        </>
    )
}

export default Home
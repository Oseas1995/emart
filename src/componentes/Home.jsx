import "./Home.css"
import { Grid } from '@chakra-ui/react'
import Producto from "./Producto"
import { supabase } from '../api/config'


function Home() {


    const sesion =supabase.auth.getSession()
    console.log(sesion);
    return (       
        <div className="home">
            <div className="home_contenedor">
                <h1><big size="20px">Pagina Inicial</big></h1>
                <Grid
                templateColumns='repeat(6, 1fr)'
                gap={4}>
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
    )
}

export default Home
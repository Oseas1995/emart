import { Link } from 'react-router-dom'
import "./Cabecera.css"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { supabase } from '../api/config'
import {Button} from '@chakra-ui/react'
import { React,useState } from "react"

function Cabecera() {

    const [sesion,setSesion] = useState (supabase.auth.getSession() ? true : false);
    console.log(sesion);
    return (
        <div className='header'>
            <div className='header_menuicon'>
                <HamburgerIcon w={10} h={10} className='header_icon' />

            </div>

            <div className='header_text'>
                <Link to='/'>

                    PAGINA PRINCIPAL

                </Link>
            </div>
            <div className='header_searchbar'>
                <input className='header_bar' />
                <Search2Icon w={30} h={30} className='header_searchicon' />

            </div>

            <div className='header_text'>
                {sesion ? (
                    <Button colorScheme='blue'>
                        <Link to='/login' onClick={ ()=> {
                            setSesion(false);
                            supabase.auth.signOut();
                            }}>
                            CERRAR SESION
                        </Link>
                    </Button>
                ) : (
                    <Button colorScheme='blue' >
                        <Link to='/home' onClick={ ()=> 
                        setSesion(true)}>
                            INICIAR SESION
                        </Link>
                    </Button>
                )}
            </div>
        </div>

    )
}

export default Cabecera;
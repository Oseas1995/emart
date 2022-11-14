import React from 'react'
import { Link } from 'react-router-dom'
import "./Cabecera.css"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { supabase } from '../api/config'
import { useState } from "react"


function Cabecera() {
    const [ cargando, setCargando]= useState(false);
    const sesion =supabase.auth.getSession()
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
                    <Link to='/' onClick={()=> supabase.auth.signOut()}>
                        CERRAR SESION
                    </Link>
                ) : (
                    <Link to='/login'>
                        INICIAR SESION
                    </Link>
                    
                )}
            </div>
        </div>

    )
}

export default Cabecera;
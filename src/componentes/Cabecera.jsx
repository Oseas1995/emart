import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cabecera.css"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { supabase } from '../api/config'
import { logOut } from '../servicios/auth'



function Cabecera() {
    const [sesion, setSesion] = useState(false)
    
    const obtenerUser = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        //console.log(user)
        if(user){
            setSesion(true)
        }
    }

    useEffect(() => {
        obtenerUser()   
    }, [])
    

    const cerrarSesion = async () => {
        await logOut()
        setSesion(false)
    }
    
    return (
        <div className='header'>
            <div className='header_menuicon'>
                <HamburgerIcon w={10} h={10} className='header_icon' />

            </div>


            <div className='header_text'> 
                    <Link to='/home'>

                        PAGINA PRINCIPAL

                    </Link>
            </div>
            <div className='header_searchbar'>
                <input className='header_bar' />
                <Search2Icon w={30} h={30} className='header_searchicon' />

            </div>

            <div className='header_text'>
                { !sesion
                    ? (<Link to='/Login'>INICIAR SESIÓN</Link>)
                    : (<Link onClick={ cerrarSesion }>CERRAR SESIÓN</Link>)  
                }

            </div>






        </div>

    )
}

export default Cabecera;
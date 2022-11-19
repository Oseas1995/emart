import { Link, useAsyncValue } from 'react-router-dom'
import "./Cabecera.css"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { supabase } from '../api/config'
import { Button } from '@chakra-ui/react'
import { React, useEffect, useState } from "react"


function Cabecera() {
    const [session, setSession] = useState(null);
    console.log(session)
    useEffect(() => {
        setSession(supabase.auth.getSession())
        supabase.auth.onAuthStateChange((_event, session) => { setSession(session) })
    }, [])

    async function Desconectar() {
        supabase.auth.signOut();

    };

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
                {session ? (
                    <Button colorScheme='blue'>
                        <Link to='/' onClick={() => { Desconectar() }}>
                            CERRAR SESION
                        </Link>
                    </Button>
                ) : (
                    <Button colorScheme='blue' >
                        <Link to='/login'>
                            INICIAR SESION
                        </Link>
                    </Button>
                )}
            </div>
        </div>

    )
}

export default Cabecera;
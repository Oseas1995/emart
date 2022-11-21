import { Link, useAsyncValue } from 'react-router-dom'
import "./Cabecera.css"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { supabase } from '../api/config'
import { Button } from '@chakra-ui/react'
import { React, useEffect, useState, } from "react"
import { SidebarData } from './SidebarData'








function Cabecera() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);





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
                <Link to='#' >
                    <HamburgerIcon w={10} h={10} className='header_icon' onClick={showSidebar} />


                </Link>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>

                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>


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
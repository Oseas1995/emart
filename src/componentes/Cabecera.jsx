import "./Cabecera.css"
import { Link } from 'react-router-dom'
import { React } from 'react';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'



function Cabecera() {
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
                <Link to='/Login'>

                        INICIAR SESION

                    </Link>

            </div>






        </div>

    )
}

export default Cabecera;
import { Route, Routes } from "react-router-dom"
import Home from "../componentes//MainPage/Home"
import Login from "../componentes/Login"
import Registro from "../componentes/Registro"
import VentanaModal from "../componentes/Modal"
import Administrador from "../paginas/perfilAdmin"
import Usuario from "../paginas/perfilUsuario"




const AppRouter = () => {


    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/modal" element={<VentanaModal />} />
            <Route path="/usuario" element={<Usuario />} />
        </Routes>
    )
}

export default AppRouter
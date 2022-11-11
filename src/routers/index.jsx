import { Route, Routes } from "react-router-dom"
import Home from "../componentes/Home"
import Login from "../componentes/Login"
import Registro from "../componentes/Registro"
import VentanaModal from "../componentes/Modal"
import "../index.css"
const AppRouter = () => {

    return (
        <Routes>            
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/modal" element={<VentanaModal/>} />
        </Routes>
    )
}

export default AppRouter
import { Route, Routes } from "react-router-dom"
import Home from "../componentes/Home"
import Login from "../componentes/Login"
import Registro from "../componentes/Registro"

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="registro" element={<Registro />} />
            <Route path="login" element={<Login />} />
        </Routes>
    )
}

export default AppRouter
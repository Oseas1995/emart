import { useState } from "react"

const useForm = (initialState) => {
    const [formularioRegistro, setFormularioRegistro] = useState(initialState)
    
    const handleInputChange = (e) => {
        const { value, name } = e.target
    
        setFormularioRegistro({
            ...formularioRegistro,
            [name]: value
        })
    }

    return {
        formularioRegistro,
        handleInputChange
    }
}

export default useForm

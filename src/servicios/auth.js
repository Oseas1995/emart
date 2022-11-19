import { supabase } from "../api/config";

export const registroConEmail = async (data) => {
    let resultado
    try {
        resultado = await supabase.auth.signUp(data)
        // console.log(resultado);
        return resultado
    } catch (error) {
        console.error(error);
    }
}

export const actualizarUsuario = async (data) => {
    try {
        await supabase.from('usuario').upsert(data, { returning: 'minimal' })
    } catch (error) {
        console.error(error);
    }
}

export const obtenerUsuario = async (data) => {
    let resultado
    try {
        resultado = await supabase.auth.signInWithPassword(data)
        return resultado
    } catch (error) {
        console.error(error)
    }
}

export const esAdministrador = async(data) =>{
    try{
        await supabase.from('usuario').select(data)
    }catch (error){
        console.error(error);
    }
}



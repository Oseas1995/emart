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
    return resultado
 }

 export const actualizarUsuario = async (data) => {
    try {
        await supabase.from('usuario').upsert(data, { returning: 'minimal' })
    } catch (error) {
        console.error(error);
    }
 }
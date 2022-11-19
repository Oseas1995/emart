import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../src/api/config";

export const AuthContext = createContext({
    user: null
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
      const { data: authListener } = supabase.auth.onAuthStateChange( async () => checkUser())

      const checkUser = async () => {
        const user = await supabase.auth.getUser()
        //console.log(user, '1');
        if (user) {
            setUser(user)
            console.log(user);
            navigate('/', { replace: true })
        } else {
            navigate('/registro', { replace: true })
        }
      }

      return () => {
        authListener.unsubscribe()
      }

    }, [])
    

    return (
        <AuthContext.Provider value={{ user }}>
            { children }
        </AuthContext.Provider>
    )
}
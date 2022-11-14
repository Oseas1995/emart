import { Container } from '@chakra-ui/react'
import AppRouter from './routers'
import Cabecera from './componentes/Cabecera'
import Fondo from './componentes/Fondo'
import { useEffect, useState } from "react"
import { supabase } from "./api/config"
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null)
  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange(() => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/home')
      }
    })
  }, [])
  return (
    <Container maxW='100%' h='100vh'>
      <Cabecera />
      <AppRouter />
      <Fondo />
    </Container>
  )
}

export default App

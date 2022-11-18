import { Container } from '@chakra-ui/react'
import AppRouter from './routers'
import Cabecera from './componentes/Cabecera'
import Fondo from './componentes/Fondo'
function App() {

  return (
    <Container maxW='100%' h='100vh'>
      {/* <Cabecera /> */}
      <AppRouter />
      <Fondo />
    </Container>
  )
}

export default App

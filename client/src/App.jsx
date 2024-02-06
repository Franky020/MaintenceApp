import './App.css'
import './components/Login/Login'
import { lazy } from 'react'
{/*import Routing from './routers/Routing' */}
const Routing = lazy(()=> import('./routers/Routing'));
import LoginContextProvider from './context/LoginProvider'

function App() {
  return (
    <LoginContextProvider>
       <Routing>    
      </Routing>
    </LoginContextProvider>   
  )
}

export default App

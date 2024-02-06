import { lazy } from "react"
{/*import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer"
import DynamicHeader  from "../components/adminstrador/DynamicHeader" */}
const Header = lazy(() => import('../components/Global/Header'));
const Footer = lazy(() => import('../components/Global/Footer'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));


export const NotFound = () => {
  return (
    <div className="container-fluid">
      <Header />
      <main className="container-fluid contenedor">
        <div className="row">
          <h2 className="encabezado_form text-center mt-4 mb-4">
            <DynamicHeader />
            
          </h2>  
          <h3>Este Mensaje se devueleve cuando no hay contenido</h3> 
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound

import { lazy } from "react"
{/*import HeaderTecnico from "../components/Global/HeaderTecnico"
import DynamicHeader from "../components/adminstrador/DynamicHeader"
import Footer from "../components/Global/Footer"
import AsideUser from "../components/Tecnico/AsideUser"
import ViewProducts from "../components/Tecnico/ViewProducts" */}
const HeaderTecnico = lazy(() => import('../components/Global/HeaderTecnico'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const Footer = lazy(() => import('../components/Global/Footer'));
const AsideUser = lazy(() => import('../components/Tecnico/AsideUser'));
const ViewProducts = lazy(() => import('../components/Tecnico/ViewProducts'));


export const ViewProductsUser = () => {
  return (
    
    <div className="container-fluid">
      <HeaderTecnico />
      <main className="container-fluid contenedor">
        <div className="row">
          <h2 className="encabezado_form text-center mt-4 mb-4">
            <DynamicHeader />
          </h2>   
          </div>
          <div className="row">
          <aside className="col-lg-2 col-md col-sm-4 col-12 menu">
            <AsideUser/>
            </aside>
            <section className="container col-lg-10 col-md-12 col-sm-12">
              <ViewProducts/>
            </section>
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default ViewProductsUser
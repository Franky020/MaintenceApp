import { lazy } from "react"



const MenuAdmin = lazy(()=> import('../components/adminstrador/MenuAdmin'))
const HeaderAlmacen = lazy(()=> import ('../components/Global/HeaderAlmacen'));
const DynamicHeader = lazy(()=> import ('../components/adminstrador/DynamicHeader'));
const AsideStore = lazy (()=> import('../components/UserAlmacen/AsideStore'))
const SectionStore = lazy (()=> import('../components/UserAlmacen/SectionStore'));
const Footer = lazy (()=> import ('../components/Global/Footer'));

export const HomeAlmacen = () => {
  return (
    <div className="container-fluid">
    <HeaderAlmacen />
    <main className="container-fluid contenedor">
      <div className="row">
        <h2 className="encabezado_form text-center mt-4 mb-4">
          <DynamicHeader />
        </h2>
        <MenuAdmin/>
        <aside className="col-lg-2 col-md col-sm-4 col-12 menu">
        <AsideStore/>
        </aside>
        <div className="container col-lg-10 col-md-12 col-sm-12">
          <SectionStore/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default HomeAlmacen
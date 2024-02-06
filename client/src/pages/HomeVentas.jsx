import { lazy } from "react";
{ /* import HeaderVentas  from "../components/Global/HeaderVentas";
import MenuAdmin from "../components/adminstrador/MenuAdmin";
import DynamicHeader from "../components/adminstrador/DynamicHeader";
import Footer from "../components/Global/Footer";
import AsideSales from "../components/UserVentas/AsideSales";
import SectionSales from "../components/UserVentas/SectionVentas";*/}
const HeaderVentas = lazy(() => import('../components/Global/HeaderVentas'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const Footer = lazy(() => import('../components/Global/Footer'));
const AsideSales = lazy(() => import('../components/UserVentas/AsideSales'));
const SectionSales = lazy(() => import('../components/UserVentas/SectionVentas'));


export const HomeVentas = () => {
  return (
    <div className="container-fluid">
    <HeaderVentas />
    <main className="container-fluid contenedor">
      <div className="row">
        <h2 className="encabezado_form text-center mt-4 mb-4">
          <DynamicHeader />
        </h2>
        <MenuAdmin />
        <aside className="col-lg-2 col-md col-sm-4 col-12 menu">
         <AsideSales/>
        </aside>
        <div className="container col-lg-10 col-md-12 col-sm-12">
          <SectionSales/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default HomeVentas;
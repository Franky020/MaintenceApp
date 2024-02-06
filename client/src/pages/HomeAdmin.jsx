import { lazy } from "react";
{/*import HeaderAdmin from "../components/Global/HeaderAdmin";
import SectionAdmin from "../components/adminstrador/SectionAdmin";
import Footer from "../components/Global/Footer";
import { DynamicHeader } from "../components/adminstrador/DynamicHeader";
import MenuAdmin from "../components/adminstrador/MenuAdmin";
import AsideAdmin from "../components/adminstrador/AsideAdmin"; */}
const HeaderAdmin = lazy(() => import('../components/Global/HeaderAdmin'));
const SectionAdmin = lazy(() => import('../components/adminstrador/SectionAdmin'));
const Footer = lazy(() => import('../components/Global/Footer'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));
const AsideAdmin = lazy(() => import('../components/adminstrador/AsideAdmin'));



export const HomeAdmin = () => {
  return (
    <div className="container-fluid">
      <HeaderAdmin />
      <main className="container-fluid contenedor">
        <div className="row">
          <h2 className="encabezado_form text-center mt-4 mb-4">
            <DynamicHeader />
          </h2>
          <MenuAdmin />
          <aside className="col-lg-2 col-md col-sm-4 col-12 menu">
            <AsideAdmin />
          </aside>
          <div className="container col-lg-10 col-md-12 col-sm-12">
            <SectionAdmin />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HomeAdmin;

import { lazy } from "react";
{/*import HeaderTecnico from "../components/Global/HeaderTecnico"
import DynamicHeader from "../components/adminstrador/DynamicHeader";
import Footer from "../components/Global/Footer";
import AddButton from "../components/Global/AddButton";
import FormNewReport from "../components/Tecnico/FormNewReport";
import TableReportUser from "../components/Tecnico/TableReportUser";
import AsideUser from "../components/Tecnico/AsideUser";
import MenuAdmin from "../components/adminstrador/MenuAdmin"; */}

const HeaderTecnico = lazy(() => import('../components/Global/HeaderTecnico'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const Footer = lazy(() => import('../components/Global/Footer'));
const AddButton = lazy(() => import('../components/Global/AddButton'));
const FormNewReport = lazy(() => import('../components/Tecnico/FormNewReport'));
const TableReportUser = lazy(() => import('../components/Tecnico/TableReportUser'));
const AsideUser = lazy(() => import('../components/Tecnico/AsideUser'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));


export const HomeUser = () => {
  return (
    <div className="container-fluid">
      <HeaderTecnico />
      <main className="container-fluid contenedor">
        <div className="row">
          <h2 className="encabezado_form text-center mt-4 mb-4">
            <DynamicHeader />
          </h2>
          <MenuAdmin />
        </div>
        <div className="row">
          <aside className="col-lg-2 col-md col-sm-4 col-12 menu">
            <AsideUser />
          </aside>
          <section className="container col-lg-10 col-md-12 col-sm-12">
            <AddButton />
            <FormNewReport />
            <TableReportUser />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeUser;

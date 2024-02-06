import { lazy } from "react";
{/*import HeaderVentas from "../components/Global/HeaderVentas";
import DynamicHeader from "../components/adminstrador/DynamicHeader";
import MenuAdmin from "../components/adminstrador/MenuAdmin";
import AsideSales from "../components/UserVentas/AsideSales";
import AddButton from "../components/Global/AddButton";
import Footer from "../components/Global/Footer";
import FormCustomers from "../components/Customers/FormCustomers";
import TableCustomers from "../components/Customers/TableCustomers"; */}
const HeaderVentas = lazy(() => import('../components/Global/HeaderVentas'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));
const AsideSales = lazy(() => import('../components/UserVentas/AsideSales'));
const AddButton = lazy(() => import('../components/Global/AddButton'));
const Footer = lazy(() => import('../components/Global/Footer'));
const FormCustomers = lazy(() => import('../components/Customers/FormCustomers'));
const TableCustomers = lazy(() => import('../components/Customers/TableCustomers'));

export const SalesCustomers = () => {
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
            <AsideSales />
          </aside>
          <div className="container col-lg-10 col-md-12 col-sm-12">
            <AddButton />
            <FormCustomers />
            <TableCustomers />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SalesCustomers;

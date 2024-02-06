
{/*import AddButton from "../components/Global/AddButton";
import Footer from "../components/Global/Footer";
import HeaderVentas from "../components/Global/HeaderVentas";
import FormOrderSales from "../components/OrdersSales/FormOrderSales";
import TableOrderSales from "../components/OrdersSales/TableOrderSales";
import AsideSales from "../components/UserVentas/AsideSales";
import DynamicHeader from "../components/adminstrador/DynamicHeader";
import MenuAdmin from "../components/adminstrador/MenuAdmin"; */}
import { lazy } from "react";
const AddButton = lazy(() => import('../components/Global/AddButton'));
const Footer = lazy(() => import('../components/Global/Footer'));
const HeaderVentas = lazy(() => import('../components/Global/HeaderVentas'));
const FormOrderSales = lazy(() => import('../components/OrdersSales/FormOrderSales'));
const TableOrderSales = lazy(() => import('../components/OrdersSales/TableOrderSales'));
const AsideSales = lazy(() => import('../components/UserVentas/AsideSales'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));


export const SalesOrder = () => {
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
            <FormOrderSales />
            <TableOrderSales />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SalesOrder
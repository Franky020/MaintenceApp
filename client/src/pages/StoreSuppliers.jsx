import { lazy } from "react"
import AddButton from "../components/Global/AddButton";
import FormSupliers from "../components/Suppliers/FormSupliers";
import TableSuppliers from "../components/Suppliers/TableSuppliers";

const MenuAdmin = lazy(()=> import('../components/adminstrador/MenuAdmin'))
const HeaderAlmacen = lazy(()=> import ('../components/Global/HeaderAlmacen'));
const DynamicHeader = lazy(()=> import ('../components/adminstrador/DynamicHeader'));
const AsideStore = lazy (()=> import('../components/UserAlmacen/AsideStore'))
const Footer = lazy (()=> import ('../components/Global/Footer'));


export const StoreSuppliers = () => {
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
         <AddButton/>
         <FormSupliers/>
         <TableSuppliers/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default StoreSuppliers

import { lazy } from "react"
{/*import AddButton from "../components/Global/AddButton"
import  TableUsers from "../components/Users/TableUsers"
import FormNewUser from "../components/Users/FormNewUser"
import Header from "../components/Global/Header"
import { DynamicHeader } from "../components/adminstrador/DynamicHeader"
import AsideAdmin from "../components/adminstrador/AsideAdmin"
import MenuAdmin from "../components/adminstrador/MenuAdmin"
import Footer from "../components/Global/Footer" */}
const AddButton = lazy(() => import('../components/Global/AddButton'));
const TableUsers = lazy(() => import('../components/Users/TableUsers'));
const FormNewUser = lazy(() => import('../components/Users/FormNewUser'));
const HeaderAdmin = lazy(() => import('../components/Global/HeaderAdmin'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const AsideAdmin = lazy(() => import('../components/adminstrador/AsideAdmin'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));
const Footer = lazy(() => import('../components/Global/Footer'));

export const Users = () => {
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
          <AddButton />
       <FormNewUser/>
       <TableUsers />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Users

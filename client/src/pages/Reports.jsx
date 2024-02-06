import { lazy } from "react"
{/*import TableListReports from "../components/ListReports/TableListReports"
import Header from "../components/Global/Header"
import { DynamicHeader } from "../components/adminstrador/DynamicHeader"
import MenuAdmin from "../components/adminstrador/MenuAdmin"
import AsideAdmin from "../components/adminstrador/AsideAdmin"
import Footer from "../components/Global/Footer" */}
const TableListReports = lazy(() => import('../components/ListReports/TableListReports'));
const HeaderAdmin = lazy(() => import('../components/Global/HeaderAdmin'));
const DynamicHeader = lazy(() => import('../components/adminstrador/DynamicHeader'));
const MenuAdmin = lazy(() => import('../components/adminstrador/MenuAdmin'));
const AsideAdmin = lazy(() => import('../components/adminstrador/AsideAdmin'));
const Footer = lazy(() => import('../components/Global/Footer'));



export const Reports = () => {
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
          <TableListReports />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
 export default Reports

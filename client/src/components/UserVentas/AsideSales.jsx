import { lazy } from "react"
{/*import BtnCustomersSales from "./BotonesVentas/BtnCustomersSales"
import BtnHomeSales from "./BotonesVentas/BtnHomeSales"
import BtnOrderSales from "./BotonesVentas/BtnOrderSales"
 */}
 const BtnCustomersSales = lazy(() => import('./BotonesVentas/BtnCustomersSales'));
 const BtnHomeSales = lazy(() => import('./BotonesVentas/BtnHomeSales'));
 const BtnOrderSales = lazy(() => import('./BotonesVentas/BtnOrderSales'));
 

export const AsideSales = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <aside
        className="offcanvas offcanvas-start d-inline-block"
        tabIndex="-1"
        id="menudespegable"
      >
        <div className="offcanvas-header" data-bs-theme="light">
          <h4>Menu</h4>
          <button
            className="btn-close btn-dark"
            type="button"
            aria-label="close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
          <BtnHomeSales/>
          <BtnOrderSales/>
          <BtnCustomersSales/>
          </ul>
        </div>
      </aside>
    </nav>
  )
}

export default AsideSales
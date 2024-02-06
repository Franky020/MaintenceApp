import { lazy } from "react"

const BtnHomeAlmacen = lazy(()=> import('./BotonesAlmacen/BtnHomeAlmacen'))
const BtnProductsStore = lazy(()=> import('./BotonesAlmacen/BtnProductsStore'));
const BtnStoreOrder = lazy(()=> import('./BotonesAlmacen/BtnStoreOrder'));
const BtnSuppliersStore = lazy(()=> import('./BotonesAlmacen/BtnSuppliersStore'));


export const AsideStore = () => {
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
        <BtnHomeAlmacen/>
        <BtnStoreOrder/>
        <BtnProductsStore/>
        <BtnSuppliersStore/>
          </ul>
        </div>
      </aside>
    </nav>
  )
}

export default AsideStore
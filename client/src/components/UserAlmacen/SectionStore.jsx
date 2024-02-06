import { NavLink } from "react-router-dom";
import { lazy } from "react";

const CountOrderPurchase = lazy(()=> import('../OrderPurchase/CountOrderPurchase'));
const ProductsCount = lazy(()=> import('../StockList/ProductsCount'))
const SuppliersCount = lazy (()=> import ('../Suppliers/SuppliersCount'))

export const SectionStore = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/compras" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.828 10h6.239m-6.239 4h6.239M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"
                />
              </svg>
            </div>
          </NavLink>
          <CountOrderPurchase />
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/inventario" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
          </NavLink>
          <ProductsCount />
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/proveedores" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"
                />
              </svg>
            </div>
          </NavLink>
          <SuppliersCount />
        </div>
      </div>
    </div>
  );
};

export default SectionStore;

import { NavLink } from "react-router-dom";
import { lazy } from "react";
{/*import UserCount from "../Users/UsersCount";
import SuppliersCount from "../Suppliers/SuppliersCount";
import ProductsCount from "../StockList/ProductsCount";
import OrderSalesCount from "../OrdersSales/OrderSalesCount";
import CountOrderPurchase from "../OrderPurchase/CountOrderPurchase";
import CountReports from "../ListReports/CountReports";
import CountReceived from "../OrdersPurchaseReceived/CountReceived";
import CountCustomers from "../Customers/CountCustomers"; */}
const UserCount = lazy(() => import('../Users/UsersCount'));
const SuppliersCount = lazy(() => import('../Suppliers/SuppliersCount'));
const ProductsCount = lazy(() => import('../StockList/ProductsCount'));
const OrderSalesCount = lazy(() => import('../OrdersSales/OrderSalesCount'));
const CountOrderPurchase = lazy(() => import('../OrderPurchase/CountOrderPurchase'));
const CountReports = lazy(() => import('../ListReports/CountReports'));
const CountReceived = lazy(() => import('../OrdersPurchaseReceived/CountReceived'));
const CountCustomers = lazy(() => import('../Customers/CountCustomers'));


export const SectionAdmin = () => {
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
          <NavLink to="/recibidos" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9M6 4h6M5 7h8"
                />
              </svg>
            </div>
          </NavLink>
          <CountReceived />
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
          <NavLink to="/ventas" className="icon-container">
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
          <OrderSalesCount />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/reportes" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9M6 4h6M5 7h8"
                />
              </svg>
            </div>
          </NavLink>
          <CountReports />
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

      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/clientes" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                />
              </svg>
            </div>
          </NavLink>
          <CountCustomers />
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3 text-center">
          <NavLink to="/usuarios" className="icon-container">
            <div className="icon-container">
              <svg
                className="icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </NavLink>
          <UserCount />
        </div>
      </div>
    </div>
  );
};

export default SectionAdmin;

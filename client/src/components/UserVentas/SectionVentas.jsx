import { NavLink } from "react-router-dom"
import { lazy } from "react"
{/*import OrderSalesCount from "../OrdersSales/OrderSalesCount"
import CountCustomers from "../Customers/CountCustomers" */}
const OrderSalesCount = lazy(() => import('../OrdersSales/OrderSalesCount'));
const CountCustomers = lazy(() => import('../Customers/CountCustomers'));

export const SectionSales = () => {
  return (
    <div className="row"> 
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
  </div>
  )
}

export default SectionSales
import { NavLink } from "react-router-dom"

export const BtnOrderSales = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/venta"} className="btn btn-light">
       Ordenes Venta
      </NavLink>
    </li>
  )
}

export default BtnOrderSales
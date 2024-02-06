
import { NavLink } from "react-router-dom"

export const BtnCustomersSales = () => {
  return (
    <li className="list-group-item border-0">
    <NavLink to={"/cliente"} className="btn btn-light">
      Clientes
    </NavLink>
  </li>
  )
}

export default BtnCustomersSales
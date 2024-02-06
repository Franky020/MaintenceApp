import { NavLink } from "react-router-dom"

export const BtnViewProducts = () => {
  return (
    <li className="list-group-item border-0">
    <NavLink to={'/viewProducts'} className="btn btn-light">
      Productos
    </NavLink>
  </li>
  )
}

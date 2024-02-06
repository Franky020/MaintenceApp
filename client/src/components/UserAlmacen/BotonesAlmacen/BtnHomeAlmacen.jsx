import { NavLink } from "react-router-dom"

export const BtnHomeAlmacen = () => {
  return (
    <li className="list-group-item border-0">
    <NavLink to={"/homeAlmacen"} className="btn btn-light">
      Inicio
    </NavLink>
  </li>
  )
}

export default BtnHomeAlmacen
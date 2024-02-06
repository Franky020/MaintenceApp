import { NavLink } from "react-router-dom"

export const BtnHomeSales = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/homeVentas"} className="btn btn-light">
        Inicio
      </NavLink>
    </li>
  )
}

export default BtnHomeSales

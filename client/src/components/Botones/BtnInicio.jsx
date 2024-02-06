import { NavLink } from "react-router-dom"

export const BtnInicio = () => {
  return (
    <li className="list-group-item border-0">
    <NavLink to={'/homeAdmin'} className="btn btn-light">
      Inicio
    </NavLink>
  </li>
  )
}

export default BtnInicio
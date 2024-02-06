import { NavLink } from "react-router-dom";

export const BtnVentas = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/ventas"} className="btn btn-light">
        Ventas
      </NavLink>
    </li>
  );
};

export default BtnVentas;

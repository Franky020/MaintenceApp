import { NavLink } from "react-router-dom";

export const BtnInventario = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/inventario"} className="btn btn-light">
        Inventario
      </NavLink>
    </li>
  );
};

export default BtnInventario;

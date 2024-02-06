import { NavLink } from "react-router-dom";

export const BtnProveedores = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/proveedores"} className="btn btn-light">
        Proveedores
      </NavLink>
    </li>
  );
};

export default BtnProveedores;

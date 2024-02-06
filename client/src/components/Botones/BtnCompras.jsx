import { NavLink } from "react-router-dom";

export const BtnCompras = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/compras"} className="btn btn-light">
        Compras
      </NavLink>
    </li>
  );
};

export default BtnCompras;

import { NavLink } from "react-router-dom";

export const BtnRecibidos = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/recibidos"} className="btn btn-light">
        Recibidos
      </NavLink>
    </li>
  );
};

export default BtnRecibidos;

import { NavLink } from "react-router-dom";

export const BtnUsuarios = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/usuarios"} className="btn btn-light">
        Usuarios
      </NavLink>
    </li>
  );
};

export default BtnUsuarios;

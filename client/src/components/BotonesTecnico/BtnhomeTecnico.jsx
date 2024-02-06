import { NavLink } from "react-router-dom";

export const BtnhomeUser = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/homeUser"} className="btn btn-light">
        Inicio
      </NavLink>
    </li>
  );
};

export default BtnhomeUser;

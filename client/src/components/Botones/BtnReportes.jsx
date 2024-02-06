import { NavLink } from "react-router-dom";

export const BtnReportes = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/reportes"} className="btn btn-light">
        Reportes
      </NavLink>
    </li>
  );
};

export default BtnReportes;

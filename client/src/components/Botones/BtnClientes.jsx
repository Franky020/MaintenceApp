import { NavLink } from "react-router-dom";

export const BtnClientes = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/clientes"} className="btn btn-light">
        Clientes
      </NavLink>
    </li>
  );
};
export default BtnClientes;

import { NavLink } from "react-router-dom";

export const BtnProductsStore = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/Stock"} className="btn btn-light">
        Inventario
      </NavLink>
    </li>
  );
};

export default BtnProductsStore;

import { NavLink } from "react-router-dom";

export const BtnSuppliersStore = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/SupplierStore"} className="btn btn-light">
        Proovedores
      </NavLink>
    </li>
  );
};

export default BtnSuppliersStore;

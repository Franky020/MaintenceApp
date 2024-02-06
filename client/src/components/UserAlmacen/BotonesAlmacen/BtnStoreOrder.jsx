import { NavLink } from "react-router-dom";

export const BtnStoreOrder = () => {
  return (
    <li className="list-group-item border-0">
      <NavLink to={"/StoreOrder"} className="btn btn-light">
        Orden Compra
      </NavLink>
    </li>
  );
};

export default BtnStoreOrder;

import { NavLink } from "react-router-dom";
import CardUser  from "./CardUser";

export const HeaderAdmin = () => {
 
  return (
    <div className="row">
    <header className="cabecera d-flex pt-1">
      <div className="row col-12">
        <div className="col-2">
          <NavLink to={'/homeAlmacen'}>
            <img
             src="../src/assets/logojamx.png"
             alt=""
              className="logo"
            />
          </NavLink>
        </div>
        <div className="col-6">
        </div>
        <div className="col-4 end-0">
          <CardUser />
        </div>
      </div>
    </header>
  </div>
  );
};

export default HeaderAdmin;

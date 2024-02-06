import { NavLink } from "react-router-dom";
import { CardUser } from "./CardUser";

export const HeaderVentas = () => {
 
  return (
    <div className="row  ">
      <header className="cabecera d-flex pt-2">
        <div className="col-4">
          <NavLink to={'/homeVentas'}>
            <img
              src="../src/assets/logojamx.png"
              alt=""
              className="logo justify-content-center"
            />
          </NavLink>
        </div>
        <div className="col-8">
        <CardUser />
        </div>
      </header>
    </div>
  );
};

export default HeaderVentas;
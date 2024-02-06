import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="row  ">
      <header className="cabecera d-flex pt-2">
        <div className="col-12 text-center">
          <NavLink to={"/"}>
            <img
              src="../src/assets/logojamx.png"
              alt=""
              className="logo mx-auto"
            />
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;

import { NavLink } from "react-router-dom";

export const HeaderPublicHome = () => {
  return (
    <div class="row">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom cabeceraPublica d-flex pt-2">
            <div name>
                <div name="logo" className="row col-2 m-2">
                    <NavLink to={"/"}>
                        <img
                          src="../src/assets/logojamx.png"
                          alt=""
                          className="logoPublic mx-auto"
                        />
                    </NavLink>
                </div>
                <div>
                    <ul class="nav nav-pills">
                        
                    </ul>
                </div>
            </div>
        </header>
    </div>
  );
};

export default HeaderPublicHome;
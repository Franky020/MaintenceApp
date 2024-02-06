import { BtnViewProducts } from "../BotonesTecnico/BtnViewProducts";
import BtnhomeUser from "../BotonesTecnico/BtnhomeTecnico";

export const AsideUser = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <aside
        className="offcanvas offcanvas-start d-inline-block "
        tabIndex="-1"
        id="menudespegable"
      >
        <div className="offcanvas-header" data-bs-theme="light">
          <h4>Menu</h4>
          <button
            className="btn-close btn-dark"
            type="button"
            aria-label="close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <BtnhomeUser />
           <BtnViewProducts/>
          </ul>
        </div>
      </aside>
    </nav>
  );
};

export default AsideUser;

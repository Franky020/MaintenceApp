import { lazy } from "react";
{/* import BtnVentas from "../Botones/BtnVentas";
import BtnInicio from "../Botones/BtnInicio";
import BtnClientes from "../Botones/BtnClientes";
import BtnInventario from "../Botones/BtnInventario";
import BtnProveedores from "../Botones/BtnProveedores";
import BtnRecibidos from "../Botones/BtnRecibidos";
import BtnReportes from "../Botones/BtnReportes";
import BtnUsuarios from "../Botones/BtnUsuarios";
import BtnCompras from "../Botones/BtnCompras";*/}
const BtnVentas = lazy(() => import('../Botones/BtnVentas'));
const BtnInicio = lazy(() => import('../Botones/BtnInicio'));
const BtnClientes = lazy(() => import('../Botones/BtnClientes'));
const BtnInventario = lazy(() => import('../Botones/BtnInventario'));
const BtnProveedores = lazy(() => import('../Botones/BtnProveedores'));
const BtnRecibidos = lazy(() => import('../Botones/BtnRecibidos'));
const BtnReportes = lazy(() => import('../Botones/BtnReportes'));
const BtnUsuarios = lazy(() => import('../Botones/BtnUsuarios'));
const BtnCompras = lazy(() => import('../Botones/BtnCompras'));


export const AsideAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <aside
        className="offcanvas offcanvas-start d-inline-block"
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
            <BtnInicio />
            <BtnCompras />
            <BtnRecibidos />
            <BtnInventario />
            <BtnReportes />
            <BtnVentas />
            <div>
              <h4 className="encabezado_form text-center mt-2">Control</h4>
            </div>
            <ul className="list-group">
              <BtnProveedores />
              <BtnClientes />
              <BtnUsuarios />
            </ul>
          </ul>
        </div>
      </aside>
    </nav>
  );
};

export default AsideAdmin;

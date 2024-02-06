import { lazy } from "react";
{/*import RenderCustomers from "./RenderCustomers"; */}

const RenderCustomers = lazy(() => import('./RenderCustomers'));
export const TableCustomers = () => {
  
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Código
              </th>
              <th scope="col" className="text-center">
                Nombre
              </th>
              <th scope="col" className="text-center">
                Dirección
              </th>
              <th scope="col" className="text-center">
                Telefono
              </th>
              <th scope="col" className="text-center">
                Correo
              </th>
              <th scope="col" className="text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderCustomers />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCustomers;

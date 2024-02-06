import { lazy } from "react";
{/*import RenderOrderSales from "./RenderOrderSales"; */}
const RenderOrderSales = lazy(()=> import('./RenderOrderSales'))

export const TableOrderSales = () => {
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
                Fecha venta
              </th>
              <th scope="col" className="text-center">
                Cliente
              </th>
              <th scope="col" className="text-center">
                Direccion
              </th>
              <th scope="col" className="text-center">
                Estatus de Orden{" "}
              </th>
              <th scope="col" className="text-center">
                Cotización
              </th>

              <th scope="col" className="text-center">
                Orden de Compra
              </th>
              <th scope="col" className="text-center">
                Facturación
              </th>
              <th scope="col" className="text-center">
                Acuse de Entrega
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderOrderSales />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableOrderSales;

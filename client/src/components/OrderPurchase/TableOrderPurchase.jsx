import { lazy } from "react";
{/* import RenderOrderPurchase from "./RenderOrderPurchase";*/}
const RenderOrderPurchase = lazy (()=> import('./RenderOrderPurchase'))
export const TableOrderPurchase = () => {
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
                Fecha creación
              </th>
              <th scope="col" className="text-center">
                Nombre Articulo
              </th>
              <th scope="col" className="text-center">
                Unidad Medida
              </th>
              <th scope="col" className="text-center">
                Cantidad
              </th>
              <th scope="col" className="text-center">
               Estado
              </th>
              <th scope="col" className="text-center">
                Orden Compra
              </th>
              <th scope="col" className="text-center">
                Orden Entrega
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderOrderPurchase />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOrderPurchase;

import { lazy } from "react";
{/*import RenderReports from "./RenderReports"; */}

const RenderReports = lazy (()=> import('./RenderReports'))
export const TableListReports = () => {
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
                Fecha Inicio
              </th>
              <th scope="col" className="text-center">
                Técnico
              </th>
              <th scope="col" className="text-center">
                Nombre del proyecto
              </th>
              <th scope="col" className="text-center">
                Nompre Operadora
              </th>
              <th scope="col" className="text-center">
                Diagnostico
              </th>
              <th scope="col" className="text-center">
                Reporte
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderReports />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableListReports;

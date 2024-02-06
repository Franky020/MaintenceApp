import { RenderReportUser } from "./RenderReportUser";

export const TableReportUser = () => {
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Fecha Inicio
              </th>
              <th scope="col" className="text-center">
                Nombre del Proyecto
              </th>
              <th scope="col" className="text-center">
                Técnico
              </th>
              <th scope="col" className="text-center">
                Dirección
              </th>
              <th scope="col" className="text-center">
                Representante del proyecto
              </th>
              <th scope="col" className="text-center">
                Boleta
              </th>
            </tr>
          </thead>

          <tbody>
           <RenderReportUser/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableReportUser;

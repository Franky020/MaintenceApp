import { useAdmin } from "../../context/useAdmin";
import { useEffect } from "react";

export const RenderReports = () => {
  const { reportList, loadReports, loadUsers, usersList } = useAdmin();
  const baseURL = "../uploads/reports/"
  useEffect(() => {
    loadReports();
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return reportList.map((report) => (
    <tr key={report.codigo}>
      <td scope="row" className="text-center">
        {report.codigo}
      </td>
      <td scope="row" className="text-center">
        {report.fechacreacion}
      </td>
      <td scope="row" className="text-center">
        {report.usuarios_codigo
          ? (() => {
              const user = usersList.find(
                (user) => user.codigo === report.usuarios_codigo
              );

              if (user) {
                return `${user.nombre} ${user.apellidopaterno} ${user.apellidomaterno}`;
              } else {
                return "Usuario no encontrado";
              }
            })()
          : "Sin información de usuario"}
      </td>
      <td scope="row" className="text-center">
        {report.nombreproyecto}
      </td>
      <td scope="row" className="text-center">
        {report.nombreoperadora}
      </td>
      <td scope="row" className="text-center">
        {report.diagnostico}
      </td>
      <td scope="row" className="center-icon">
      <button className="btn btn-secondary"
        onClick={() => {
          if (report.reporte !== "" && report.reporte !== null) {
            window.open(`${baseURL}${report.reporte}`, "_blank");
          } else {
            alert("La Boleta del Reporte no existe.");
          }
        }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
    </tr>
  ));
};

export default RenderReports;

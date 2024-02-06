import { useEffect, useState } from "react"
import { useAdmin } from "../../context/useAdmin"
import { useLogin } from "../../context/useLogin"

export const RenderReportUser = () => {
  const { reportList, loadReports, loadUsers, usersList } = useAdmin();
  const { user } = useLogin();
  const [reportesFiltrados, setReportesFiltrados] = useState([]);
  
  useEffect(() => {
    loadReports();
    loadUsers();

    if (user) {
      const reportesFiltrados = reportList.filter((report) => report.usuarios_codigo === user.codigo);
      setReportesFiltrados(reportesFiltrados);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const baseURL = "../uploads/reports/"
  return reportesFiltrados.map((report) => (
    <tr key={report.codigo}>
      <td scope="row" className="text-center">
        {report.fechacreacion}
      </td>
      <td scope="row" className="text-center">
        {report.nombreproyecto}
      </td>
      <td scope="row" className="text-center">
        {report.usuarios_codigo
          ? (() => {
            const user = usersList.find((user) => user.codigo === report.usuarios_codigo);

            if (user) {
              return `${user.nombre} ${user.apellidopaterno} ${user.apellidomaterno}`;
            } else {
              return 'Usuario no encontrado';
            }
          })()
          : 'Sin información de usuario'}
      </td>
      
      <td scope="row" className="text-center">
        {report.direccion}
      </td>
      <td scope="row" className="text-center">
        {report.nombrerepresentante}
      </td>
      <td scope="row" className="center-icon">
      <button className="btn btn-secondary"
        onClick={() => {
          if (report.reporte !== "" && report.reporte !== null) {
            window.open(`${baseURL}${report.reporte}`, "_blank");
          } else {
            alert("La Boleta de Reporte no existe.");
          }
        }}
        >
          <img src="../src/assets/visibility.svg" alt="ver" />
        </button>
      </td>
    </tr>
  ));
};


export default RenderReportUser
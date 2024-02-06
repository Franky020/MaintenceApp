import { useEffect } from "react";
import { useAdmin } from "../../context/useAdmin";
import { useNavigate } from "react-router-dom";

export const RenderSuppliers = () => {
  const navigate = useNavigate();
  const { suppliersList, deleteSupplier, loadSuppliers } = useAdmin();

  useEffect(() => {
    loadSuppliers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return suppliersList.map((supplier) => (
    <tr key={supplier.codigo}>
      <td scope="row" className="text-center">
        {supplier.codigo}
      </td>
      <td scope="row" className="text-center">
        {supplier.nombreproveedor}
      </td>
      <td scope="row" className="text-center">
        {supplier.nombrecontacto}
      </td>
      <td scope="row" className="text-center">
        {supplier.direccion}
      </td>
      <td scope="row" className="text-center">
        {supplier.telefono}
      </td>
      <td scope="row" className="text-center">
        {supplier.correo}
      </td>
      <td scope="row" className="center-icon">
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => navigate(`/editSupplier/${supplier.codigo}`)}
          >
            <img src="../src/assets/bxs-edit.svg" alt="editar" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteSupplier(supplier.codigo)}
          >
            <img src="../src/assets/bx-trash-alt.svg" alt="eliminar" />
          </button>
        </div>
      </td>
    </tr>
  ));
};

export default RenderSuppliers;

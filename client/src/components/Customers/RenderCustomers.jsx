
import { useAdmin } from "../../context/useAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const RenderCustomers = () => {
  const navigate = useNavigate();

  const { customersList, deleteCustomer, loadCustomers } = useAdmin();

  useEffect(() => {
    loadCustomers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return customersList.map((customer) => (
    <tr key={customer.codigo}>
      <td scope="row" className="text-center">
        {customer.codigo}
      </td>
      <td scope="row" className="text-center">
        {customer.nombre} {customer.apellidopaterno} {customer.apellidomaterno}
      </td>
      <td scope="row" className="text-center">
        {customer.direccion}
      </td>
      <td scope="row" className="text-center">
        {customer.telefono}
      </td>
      <td scope="row" className="text-center">
        {customer.correo}
      </td>
      <td scope="row" className="center-icon">
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => navigate(`/editCustomer/${customer.codigo}`)}
          >
            <img src="../src/assets/bxs-edit.svg" alt="editar" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteCustomer(customer.codigo)}
          >
            <img src="../src/assets/bx-trash-alt.svg" alt="eliminar" />
          </button>
        </div>
      </td>
    </tr>
  ));
};

export default RenderCustomers;

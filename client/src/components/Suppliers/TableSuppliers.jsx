import RenderSuppliers from "./RenderSuppliers";

export const TableSuppliers = () => {
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
                Nombre Proveedor
              </th>
              <th scope="col" className="text-center">
                Persona Encargada
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
            <RenderSuppliers />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSuppliers;

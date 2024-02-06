import RenderUser from "./RenderUsers"

export const TableUsers = () => {
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
        <tr>
          <th scope="col" className="text-center">Código</th>
          <th scope="col" className="text-center">Nombre</th>
          
          <th scope="col" className="text-center">Correo</th>
          <th scope="col" className="text-center">Telefono</th>
          <th scope="col" className="text-center">Tipo Usuario</th>
          <th scope="col" className="text-center">Acciones</th>
        </tr>
          </thead>
          <tbody>
          <RenderUser/>
          </tbody>
          
        </table> 
      </div>
    </div>
  )
}

export default TableUsers